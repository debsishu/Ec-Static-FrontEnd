import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default async function uploadImage(image) {
  if (image == null) {
    alert("No image selected");
    return;
  }
  const name = `images/${image.name + v4()}`;
  const imageRef = ref(storage, name);
  await uploadBytes(imageRef, image);
  const url = await getDownloadURL(imageRef);
  console.log(url);
  return url;
}
