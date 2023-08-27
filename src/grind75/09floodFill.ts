// base cases
// 1. reach out of the image
// 2. Not same color
// 3. reach a point you have seen
// 4. Same color

type Point = {
  x: number
  y: number
}

const dir = [
  [1,0],
  [-1,0],
  [0,1],
  [0,-1]
]

function walkImage(image: number[][], curr: Point, color: number, seen: boolean[][], initialColor: number): void {
  if(
    curr.y < 0 || curr.y >= image.length ||
    curr.x < 0 || curr.x >= image[0].length
  ) {
    return
  }

  if(image[curr.y][curr.x] !== initialColor) return

  if(seen[curr.y][curr.x]) return


  // 3 recurse
  // pre
  seen[curr.y][curr.x] = true
  image[curr.y][curr.x] = color 
  // recurse
  for(let i= 0; i< dir.length; i++) {
    const [x, y] = dir[i]
    walkImage(image, {
      x: curr.x + x,
      y: curr.y + y
    }, color, seen, initialColor)
  }
  // post
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const initialColor = image[sr][sc]

  const seen: boolean[][] = []

  for(let i =0; i < image.length;i++) {
    seen.push(new Array(image[0].length).fill(false))
  }

  walkImage(image, { y: sr, x: sc }, color, seen, initialColor)

  return image
}
  












  // if(image[sr] === undefined || image[sr][sc] === undefined) return image
  
  // if(image[sr][sc] === color) return image
  // const old_color = image[sr][sc]



  // if(image[sr][sc] !== old_color) return image
  
  // if(image[sr][sc] !== color) image[sr][sc] = color

  // if(image[sr][sc])
  // floodFill(image, sr + 1, sc, color)
  // floodFill(image, sr - 1, sc, color)
  // floodFill(image, sr, sc + 1, color)
  // floodFill(image, sr, sc - 1, color)

  // return image



console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
