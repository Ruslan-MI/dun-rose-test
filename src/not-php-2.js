const templates = [
  {
    id: 1,
    parentId: 0,
    attribute: '',
    text: 'Корневой шаблон / title',
  },
  {
    id: 2,
    parentId: 1,
    attribute: 'title',
    text: 'Первый подшаблон<br/>content',
  },
  {
    id: 3,
    parentId: 1,
    attribute: 'title',
    text: 'Второй подшаблон<br/>content',
  },
  {
    id: 4,
    parentId: 2,
    attribute: 'content',
    text: '<b>Шаблон 4</b>',
  },
  {
    id: 5,
    parentId: 3,
    attribute: 'content',
    text: '<b>Шаблон 5</b>',
  },
  {
    id: 6,
    parentId: 2,
    attribute: 'content',
    text: '<b>Шаблон 6</b>',
  },
  {
    id: 7,
    parentId: 0,
    attribute: '',
    text: 'Корневой шаблон №2',
  },
];

const getTemplate = (id) => {
  let template = {
    ...templates.find((item) => item.id === id),
  };

  while (template.parentId) {
    const parentTemplate = templates.find((item) => item.id === template.parentId);
    const text = parentTemplate.text.replace(template.attribute, template.text);

    template = {
      ...parentTemplate,
      text,
    };
  }

  return template.text;
};

// eslint-disable-next-line
console.log(getTemplate(6));
