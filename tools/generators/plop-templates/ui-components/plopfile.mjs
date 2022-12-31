import {
  toFileNameWithExtensionTsx,
} from '../../utils/index.mjs';

export function uiComponentsPlop(plop) {
  plop.setGenerator('ui-components', {
    description: 'new ui component in repo',
    prompts: [
      {
        type: 'list',
        name: 'location',
        message: 'Location Folder: ',
        choices: [
          { name: 'pages', value: 'pages' },
          { name: 'ui', value: 'ui' },
        ],
      },
      {
        type: 'list',
        name: 'pagesFolder',
        message: 'Pages Folder: ',
        choices: [
          { name: 'Home', value: 'Home' },
        ],
        when(answers) {
          return answers.location === 'pages';
        },
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Component Name: ',
      }
    ],
    actions: (data) => {
      const templateDir = 'tools/generators/plop-templates';
      const location = data.location;
      const pagesFolder = data.pagesFolder;
      
      const componentFileName = data.componentName;
      const componentName = (
        data.componentName
      );
      const componentDir = `components/${location}${
        pagesFolder ? `/${pagesFolder}` : ``
      }/${componentFileName}`;
      const filesToAlwaysCopyOver = [
        'component.styles.txt',
        'component.stories.txt',
        'component.txt',
      ];
      

      const actions = [];
      // Copy over basic files
      filesToAlwaysCopyOver.forEach((file) => {
        actions.push({
          type: 'add',
          path: `${componentDir}/${toFileNameWithExtensionTsx(
            file,
            componentFileName
          )}`,
          templateFile: `${templateDir}/ui-components/${file}`,
        });
      });

      // Modify component*.tsx
      filesToAlwaysCopyOver.forEach((file) => {
        actions.push({
          type: 'modify',
          path: `${componentDir}/${toFileNameWithExtensionTsx(
            file,
            componentFileName
          )}`,
          pattern: /(-- PLOP COMPONENT NAME HERE --)/gi,
          template: `${componentName}`,
        });
        actions.push({
          type: 'modify',
          path: `${componentDir}/${toFileNameWithExtensionTsx(
            file,
            componentFileName
          )}`,
          pattern: /(-- PLOP COMPONENT FOLDER NAME HERE --)/gi,
          template: `${componentFileName}`,
        });
      });

      return [
        ...actions,
      ];
    },
  });
}
