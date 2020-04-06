import React, { useEffect, useState } from 'react';
import { Layout, Collapse, Upload, Button, Input, Form, Select  } from 'antd';

import { db } from '../App';
import { UploadOutlined } from '@ant-design/icons';

const Admin = () => {
  const [value, setValue] = useState('');
  const [className, setClassName] = useState(null);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  useEffect(() => {
    fetchClass();
  }, [])
  const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const props = {
    action: 'https://nehruacademy-1d46.restdb.io/media',
    onChange({ file, fileList: files }) {
      let fl = []
      console.log(file.status)
      if (file.status !== 'uploading' && files.length) {
        files.forEach((item) => {
          if (item.response) fl.push(item.response.ids[0])
        });
        setFileList([...fileList, fl]);
      }
    },
    headers: {
      'x-apikey': '5e876350111788414066c610',
    }
  }

  const reset = () => {

    form.resetFields();
    console.log("asdasd")
    setLoading(false);
    setValue('');
    setClassName('');
  }
  const addExercise = () => {
    if (value && fileList.length && className) {
      setLoading(true)
        var obj = new db.exercises({ title: value, class: className, exercise: fileList });
        obj.save(() => 
            reset()
        );
    }
  }

  const addResults = () => {
    if (value && fileList.length && className) {
      setLoading(true)
      fileList.forEach((item, index) => {
        var obj = new db.results({ title: value, class: className, result: item });
        obj.save(() => {
          if (index === fileList.length - 1) {
            reset()
          }
        });
      })
    }
  }

  const addHomework = () => {
    if (value && fileList.length && className) {
      setLoading(true)
      fileList.forEach((item, index) => {
        var obj = new db.homework({ title: value, class: className, homework: item });
        obj.save(() => {
          if (index === fileList.length - 1) {
            reset()
          }
        });
      })
    }
  }

  const addGallery = () => {
    if (fileList.length) {
      setLoading(true)
      fileList.forEach((item, index) => {
        var obj = new db.gallery({ image: item });
        obj.save(() => {
          if (index === fileList.length - 1) {
            setLoading(false);
            setFileList([]);
          }
        });
      })
    }
  }

  const addNotice = () => {
    if (fileList.length) {
      setLoading(true)
      fileList.forEach((item, index) => {
        var obj = new db.notice({ image: item });
        obj.save(() => {
          if (index === fileList.length - 1) {
            setLoading(false);
            setFileList([]);
          }
        });
      })
    }
  }

  const addClass = () => {
    if (value) {
      setLoading(true)
      var obj = new db.classes({ name: value });
      obj.save(() => {
        setLoading(false);
        setValue('');
        fetchClass();
      });
    }
  }

  const change = (event, key) => {
    setValue(event.target.value)
  }

  const fetchClass = () => {
    setLoading(true)
    db.classes.find({}, {"$orderby": {"id": 1}}, function (err, res) {
      if (!err) {
        setLoading(false);
        setClasses(res)
      }
    });
  }

  return <div style={{height: '100vh'}}>
    <Form form={form}>
    <Layout className="layout">
      <Collapse accordion>
        <Collapse.Panel header={'Add Class'} >
          <Input placeholder="Class Name" value={value} onChange={change} disabled={loading} /><hr />
          <Button onClick={addClass} loading={loading}>Add Class</Button>
        </Collapse.Panel><hr />
        <Collapse.Panel header={'Add Exercise'} on>
          <Select
            value={className}
            showSearch
            style={{ width: 200 }}
            placeholder="Select a class"
            optionFilterProp="children"
            onChange={(value) => setClassName(value)}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {classes.map((item) => {
              return <Select.Option value={item.id} >{item.name}</Select.Option>
            })}
          </Select><br />
          <Form.Item
            name="upload"
            getValueFromEvent={normFile}
            valuePropName="fileList" />
          <Upload {...props} multiple >
            <Button>
              <UploadOutlined /> Upload Exercises
        </Button>
          </Upload><Form.Item /><br />
          <Input placeholder="Title" value={value} onChange={change} disabled={loading} /><hr />
          <Button onClick={addExercise} loading={loading}>Add Exercise</Button>
        </Collapse.Panel><hr />
        <Collapse.Panel header={'Add Results'} on>
          <Select

            value={className}
            showSearch
            style={{ width: 200 }}
            placeholder="Select a class"
            optionFilterProp="children"
            onChange={(value) => setClassName(value)}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {classes.map((item) => {
              return <Select.Option value={item.id} >{item.name}</Select.Option>
            })}
          </Select><br />
          <Form.Item
            name="upload"
            valuePropName="fileList">
            <Upload {...props} multiple >
              <Button>
                <UploadOutlined /> Upload Results
        </Button>
            </Upload> </Form.Item><br />

          <Input placeholder="Title" value={value} onChange={change} disabled={loading} /><hr />
          <Button onClick={addResults} loading={loading}>Add Results</Button>
        </Collapse.Panel><hr />
        <Collapse.Panel header={'Add Homework'} on>
          <Select
            showSearch
            value={className}
            style={{ width: 200 }}
            placeholder="Select a class"
            optionFilterProp="children"
            onChange={(value) => setClassName(value)}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {classes.map((item) => {
              return <Select.Option value={item.id} >{item.name}</Select.Option>
            })}
          </Select><br />
          <Form.Item
            name="upload"
            
            valuePropName="fileList">
            <Upload {...props} multiple >
              <Button>
                <UploadOutlined /> Upload Results
        </Button>
            </Upload><br />
            <Input placeholder="Title" value={value} onChange={change} disabled={loading} /><hr />
          </Form.Item>
          <Button onClick={addHomework} loading={loading}>Add Homework</Button>
        </Collapse.Panel><hr />
        <Collapse.Panel header={'Add Gallery'} >
          <Form.Item
            name="upload"
            
            valuePropName="fileList">
            <Upload {...props} multiple>
              <Button>
                <UploadOutlined /> Upload Gallery
        </Button>
            </Upload></Form.Item><br />
          <Button onClick={addGallery} loading={loading}>Add Gallery</Button>
        </Collapse.Panel><hr />
        <Collapse.Panel header={'Add Notice'} >
          <Form.Item
            name="upload"
            
            valuePropName="fileList">
            <Upload {...props} multiple>
              <Button>
                <UploadOutlined /> Upload Notice
        </Button>
            </Upload></Form.Item><br />
          <Button onClick={addNotice} loading={loading}>Add Notice</Button>
        </Collapse.Panel><hr />
      </Collapse>
    </Layout>
  </Form>
  </div>
}

export default Admin