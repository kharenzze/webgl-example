//index.ts
//
import './main.css'
import vert from './sample.vert'
import frag from './sample.frag'

const canvas = document.getElementById('canvas')
const gl = canvas.getContext("experimental-webgl");
canvas.width = window.innerWidth
canvas.height = window.innerHeight


gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0, 0.5, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

