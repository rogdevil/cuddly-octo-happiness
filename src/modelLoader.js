// import * as tf from 'tfjs'
// const tfn = require('@tensorflow/tfjs-node');
// import * as tfn from '@tensorflow/tfjs-node';
// import * as tfng from '@tensorflow/tfjs-node-gpu';
const tf = require('@tensorflow/tfjs')

const loadModel = async () => {
    console.log("starting to load")
    // const handler = tfn.io.fileSystem("/model.json");
    const model = await tf.loadLayersModel("/model.json")
    console.log("load over :", model)
    return model
}

export default loadModel