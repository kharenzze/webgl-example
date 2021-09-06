//index.ts
//
import './main.css'
import vert from './sample.vert'
import frag from './sample.frag'

const canvas = document.getElementById('canvas')
const gl = canvas.getContext("experimental-webgl");
canvas.width = window.innerWidth
canvas.height = window.innerHeight

//compile shader
const vertShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertShader, vert);
gl.compileShader(vertShader);

const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragShader, frag);
gl.compileShader(fragShader);

const program = gl.createProgram();
gl.attachShader(program, vertShader);
gl.attachShader(program, fragShader);
gl.linkProgram(program);

