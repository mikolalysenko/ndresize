ndresize
==============
Code for cropping and padding n-dimensional images.

Installation
============
Via npm:

    npm install ndimage-resize
    
Example
=======
Here is how to resize a 3D array:

    var volume = [[[1]]];
    var resized = require("ndimage-resize")([3,3,3], volume);
    
Now resized will be a volume which is 3x3x3, padded with 0s.


### `require("ndimage-resize")(dims, image[, result])`
Resizes the image `image` to `dims` by cropping or padding along each dimension independently.  The result is stored in `result` if specified, otherwise a new array is created.

* `dims` are the dimensions for the new image
* `image` is the image to crop/pad
* `result` gets the result. Must be size of dims. (optional)

Returns the resulting cropped/padded image.

Credits
=======
(c) 2013 Mikola Lysenko. BSD License
