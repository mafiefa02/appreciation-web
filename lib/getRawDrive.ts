export default function getRawDrive(url: string) {
  return "https://drive.google.com/uc?id=" + url.split("/")[5];
}
