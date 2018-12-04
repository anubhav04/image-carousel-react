Directory Structure JSON For ReactJs
====================================

This module exposes functions with which you can:

* Get a JSON tree/structure of a folder (including subdirectories and files), note that you have specify the `filesystem` to use yourself. You can get JSON tree for a directory with `n` levels of children.
* Traverse a structure, giving callbacks to execute when a file or folder is found.

* It gives you all the details of the file and folder including date created, size in actual units, file extension and local path.

* You can use to it get only size of file you are uploading: Size Units: ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']


## Installation
    npm install --save json-dir-tree-react
    yarn add json-dir-tree-react

## Example

``` javascript
import ReactImageCarousel from 'image-carousel-react';
import React, { Component } from 'react';
export default class Example extends Component{
  constructor(props){
    super(props);
    this.state={
      images:{
        {
          source: 'path',
          caption: 'caption'
        },
        {
          source: 'path',
          caption: 'caption'
        },
        {
          source: 'path',
          caption: 'caption'
        },
        {
          source: 'path',
          caption: 'caption'
        },
        {
          source: 'path',
          caption: 'caption'
        },
      }
    }
  }
  render(){
    return(
      <ReactImageCarousel images={this.state.images}/>
    )
  }
}

```
## License MIT
* MIT License

Copyright (c) 2018 anubhav04

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.