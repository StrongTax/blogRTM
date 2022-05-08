export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62774b5b0732537d9f193c58',
                  title: 'Sanity Studio',
                  name: 'blogrtm-1-studio',
                  apiId: 'c3dd3d6b-2c5f-48c9-8bf9-77b411a095a2'
                },
                {
                  buildHookId: '62774b5b878bf40164f2218b',
                  title: 'Blog Website',
                  name: 'blogrtm-1',
                  apiId: '452fb96d-ed2b-41ca-9d8d-00325a8691b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StrongTax/blogRTM1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blogrtm-1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
