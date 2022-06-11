export const prepareData = (data, imagesData) => {
  data = [...data, ...imagesData];
  const result = {};
  data.forEach((element) => {
    const { name, genre, url } = getNameURLAndGenre(
      element.public_id,
      element.folder,
      element.url
    );
    if (genre in result) {
      if (element?.format === "jpg") {
        const {
          name: imageName,
          url: imageUrl,
          genre: imageGenre,
        } = getNameURLAndGenre(element.public_id, element.folder, element.url);
        const index = result[imageGenre].find((e) => {
          return e.name == imageName;
        });
        index.imageUrl = imageUrl;
      } else {
        result[genre].push({ name, genre, url, imageUrl: "" });
      }
    } else {
      result[genre] = [{ name, genre, url, imageUrl: "" }];
    }
  });
  return result;
};

const getNameURLAndGenre = (name, genre, url) => {
  name = name
    .substring(name.lastIndexOf("/") + 1)
    .replace(".epub", "")
    .replaceAll("_", " ")
    .replace(".jpg", "");
  name = name.substring(0, name.length - 7);
  genre = genre.substring(genre.indexOf("/") + 1);
  return { name, genre, url };
};

export const generateData = (data, start) => {
  const tempData = {};
  for (const [genre, entries] of Object.entries(data)) {
    if (data[genre].length <= start * 2) {
      return {};
    }
    tempData[genre] = entries.slice(start * 2, start * 2 + 2);
  }
  return { ...data, ...tempData };
};
