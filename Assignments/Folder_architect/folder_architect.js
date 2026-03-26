class Folder {
  constructor(name) {
    this.name = name;
    this.files = [];
    this.subfolders = [];
  }

  addFile(file) {
    this.files.push(file);
  }

  addSubfolder(folder) {
    this.subfolders.push(folder);
  }

  displayContents() {
    console.log(`Folder: ${this.name}`);
    console.log('Files:');
    this.files.forEach((file) => console.log(`- ${file}`));
    console.log('Subfolders:');
    this.subfolders.forEach((folder) => console.log(`- ${folder.name}`));
  }
}

class File {
  constructor(name) {
    this.name = name;
  }
}

// Example usage
const root = new Folder('Root');
const documents = new Folder('Documents');
const images = new Folder('Images');

root.addSubfolder(documents);
root.addSubfolder(images);

documents.addFile(new File('report.txt'));
documents.addFile(new File('presentation.ppt'));

images.addFile(new File('image1.jpg'));
images.addFile(new File('image2.png'));

root.displayContents();
documents.displayContents();
images.displayContents();