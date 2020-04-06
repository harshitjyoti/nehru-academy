import React from 'react';
import { Divider, Empty } from 'antd';
import { ImageGroup, Image } from 'react-fullscreen-image'


const styles = {
    container: {
        padding: 15
    },

    ul: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gridGap: 15,
        listStyle: 'none',
        margin: 0,
        padding: 0
    },

    imagesLi: {
        position: 'relative',
        paddingTop: '66%',
        border: '6px solid wheat',
        borderRadius: 10,
        margin: '25px 5px 25px 5px'
    },
    heading: {
        position: 'realtive',
        display: 'inline',
        margin: 'auto',
        padding: 25,
        fontSize: 20,
        float: 'left',
        zIndex: 9,
        color: 'black',
        textAlign: 'center',
    },
    imagesImg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
        objecFit: 'cover'
    }
}
const Gallery = ({ data, keyName }) => {
    return (<>
        <Divider />
        {data.length ? <div style={{ height: '100vh' }}>
            <ImageGroup >
                <ul className="images" style={styles.ul}>
                    {data && data.map((d) => {
                        console.log(d, keyName)
                        return d[keyName].map(i => (
                            <li key={i} style={styles.imagesLi}>
                                <div className="heading">{d.title}</div>
                                <Image
                                    src={'https://nehruacademy-1d46.restdb.io/media/' + i}
                                    style={styles.imagesImg}
                                />
                            </li>
                        ))
                    })}
                </ul>
            </ImageGroup>
        </div> : <Empty />
        }

    </>
    );
}

export default Gallery;