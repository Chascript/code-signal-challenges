/*
Last night you partied a little too hard. Now there's a black and white
 photo of you that's about to go viral! You can't let this ruin your
  reputation, so you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm 
distorts the input image in the following way: Every pixel x in the output
 image has a value equal to the average value of the pixel values from the
  3 × 3 square that has its center at x, including x itself. All the pixels
   on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.

Example

For

image = [[7, 4, 0, 1], 
         [5, 6, 2, 2], 
         [6, 10, 7, 8], 
         [1, 4, 2, 0]]
the output should be

boxBlur(image) = [[5, 4], 
                  [4, 4]]
There are four 3 × 3 squares in the input image, so there should be four 
integers in the blurred output. 
To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5.
 The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.

*/

function boxBlur(image) {
  const answer = []
  for(let i = 0; i < image.length - 2; i++){
    const matrix = []
    for(let j = 0; j < image[0].length - 2; j++ ){
        const top = image[i][j] + image[i][j+1] + image[i][j+2]
        const mid = image[i+1][j] + image[i+1][j+1] + image[i+1][j+2]
        const bot = image[i+2][j] + image[i+2][j+1] + image[i+2][j+2]
        matrix.push(Math.floor((top+mid+bot)/9))
    }
    answer.push(matrix)
  }
  return answer
}