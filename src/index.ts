//index.ts
//
import './main.css'
import vert from './sample.vert'
import frag from './sample.frag'

const canvas = document.getElementById('canvas')
const rect = canvas.getBoundingClientRect()
const gl = canvas.getContext("experimental-webgl");

canvas.height = rect.height
canvas.width = rect.width

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

//vertices
const aspect = rect.width / rect.height;

const vertices = new Float32Array([
-0.5, 0.5*aspect, 0.5, 0.5*aspect, 0.5,-0.5*aspect, // Triangle 1
-0.5, 0.5*aspect, 0.5,-0.5*aspect, -0.5,-0.5*aspect // Triangle 2
]);

const vbuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

const itemSize = 2;
const numItems = vertices.length / itemSize;

gl.useProgram(program);

program.uColor = gl.getUniformLocation(program, "uColor");
gl.uniform4fv(program.uColor, [0.0, 0.7, 0.0, 1.0]);

program.aVertexPosition = gl.getAttribLocation(program, "aVertexPosition");
gl.enableVertexAttribArray(program.aVertexPosition);
gl.vertexAttribPointer(program.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);

gl.drawArrays(gl.TRIANGLES, 0, numItems);

setTimeout(() => {
  gl.uniform4fv(program.uColor, [0.7, 0.0, 0.0, 1.0]);
  gl.drawArrays(gl.TRIANGLES, 0, numItems);
}, 1000)

