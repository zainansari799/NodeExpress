import lib = require('./lib1/file')
import a = require('./../a')

console.log("MOD File Loaded")

export function a1(){
	console.log("a1 FN called from MOD File")
}