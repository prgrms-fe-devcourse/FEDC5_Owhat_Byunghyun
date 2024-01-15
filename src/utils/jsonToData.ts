const isJson = (str: string) => {
  try {
    const json = JSON.parse(str);
    return json && typeof json === 'object';
  } catch (e) {
    return false;
  }
};

export const jsonToData = (title: string) => {
  if (isJson(title)) {
    const { title: postTitle, content: postContent } = JSON.parse(title);

    return { postTitle, postContent };
  } else {
    return { postTitle: title, postContent: '' };
  }
};
