import sizeOf from "image-size";
import Jimp from "jimp";

export async function degradeImage(
  files: { path: string; size: number }[],
  degradation: number,
  destinationFolder: string
) {

  const readOperations: Promise<any>[] = [];
  const imageSizes: { width: number; height: number }[] = [];

  let readOperationsResponse :any[]
  const newFilePaths:string[] = []

  try {
    files.forEach(async (testFile) => {

      newFilePaths.push(`${destinationFolder}\\${
        testFile.path.split("\\").splice(-1, 1)[0]
      }`);

      const dimensions = sizeOf(testFile.path);
      imageSizes.push({ width: dimensions.width, height: dimensions.height });

      readOperations.push(Jimp.read(testFile.path));
      
    });

    readOperationsResponse = await Promise.all(readOperations);

    readOperationsResponse.forEach((res, idx) => {

        res
          .resize(
            imageSizes[idx].width * (degradation / 100),
            imageSizes[idx].height * (degradation / 100)
          )
          .quality(degradation)
          .write(newFilePaths[idx])
      });


    return;


  } catch (error) {
    console.log("error: ***", error);
  }
}

export async function resizeImage(imagePath:string, destinationFolder:string, finalHeight:number, finalWidth:number){

    const newImagePath = `${destinationFolder}\\${
        imagePath.split("\\").splice(-1, 1)[0]
      }`

    const res = await Jimp.read(imagePath)
    res.resize(finalWidth, finalHeight)
    .write(newImagePath)

    return
    
}
