<template></template>
<script>
  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qevent.categories',
          permission: 'ievent.categories',
          create: {
            title: this.$tr('qevent.layout.newCategory'),
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('ui.form.id'), field: 'id', style: 'width: 50px'},
              {name: 'title', label: this.$tr('ui.form.title'), field: 'title', align: ''},
              {name: 'actions', label: this.$tr('ui.form.actions'), align: ''},
            ],
            requestParams: {include: 'parent'}
          },
          update: {
            title: this.$tr('qevent.layout.updateCategory'),
            requestParams: {include: 'parent'}
          },
          delete: true,
          formLeft: {
            id: {value: ''},
            title: {
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: true,
              props:{
                label: this.$tr('ui.form.title'),
              }
            },
            slug: {
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: true,
              props:{
                label: this.$tr('ui.form.slug'),
              }
            },
            parentId: {
              value: 0,
              type: 'select',
              clearable: true,
              loadOptions: {
                apiRoute: 'apiRoutes.qevent.categories',
                select: {label: 'title', id: 'id'},
                requestParams: {include: 'parent'}
              },
              props:{
                  label: this.$tr('ui.form.parent'),
              }
            },
            description: {
              value: '',
              type: 'html',
              isRequired: true,
              isTranslatable: true,
              props: {
                label: this.$tr('ui.form.description'),
              },
            },
            metaTitle: {
              value: '',
              type: 'text',
              isTranslatable: true,
              props:{
                label: this.$tr('ui.form.metaTitle'),
              }
            },
            metaDescription: {
              props:{
                label: this.$tr('ui.form.metaDescription'),
              },
              value: '',
              type: 'textarea',
              isTranslatable: true,
            },
            metaKeywords: {
              props: {
                  label: this.$tr('ui.form.metaDescription'),
              },
              value: '',
              type: 'text',
              isTranslatable: true,
            },
          },
          formRight: {},
        }
      }
    }
  }
</script>
