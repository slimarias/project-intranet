<template></template>
<script>
  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qevent.events',
          permission: 'ievent.events',
          create: {
            title: this.$tr('qevent.layout.newEvent'),
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('ui.form.id'), field: 'id', style: 'width: 50px'},
              {name: 'title', label: this.$tr('ui.form.title'), field: 'title', style: '', align:''},
              {name: 'startDate', label: this.$tr('qevent.layout.form.startDate'), field: 'startDate', style: '', format: val => val ? this.$trd(val) : '-',},
              {name: 'endDate', label: this.$tr('qevent.layout.form.endDate'), field: 'endDate', style: '', format: val => val ? this.$trd(val) : '-',},
              {name: 'price', label: this.$tr('ui.form.price'), field: 'price', style: '', format: val => this.$trc(val)},
              {name: 'actions', label: this.$tr('ui.form.actions'), align: ''},
            ],
            requestParams: {include: 'categories'},
            filters:{
              status: {
                props: {
                    label: `${this.$tr('ui.form.status')}:`,
                    options: [
                        {label: this.$tr('ui.label.all'), value: false},
                        {label: this.$tr('ui.form.publish'), value: 2},
                        {label: this.$tr('ui.form.noPublish'), value: 3},
                        {label: this.$tr('ui.form.draft'), value: 0},
                        {label: this.$tr('ui.form.pending'), value: 1}
                    ],
                },
                value: false,
                type: 'select',
                isRequired: true,
                isTranslatable: false,
              },
            }
          },
          update: {
            title: this.$tr('qevent.layout.updateEvent'),
            requestParams: {include: 'categories'}
          },
          delete: true,
          formLeft: {
            id: {value: ''},
            userId: {value: this.$store.state.quserAuth.userId},
            title: {
              props: {
                  label: this.$tr('ui.form.title'),
              },
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: true,
            },
            description: {
              props: {
                label: this.$tr('ui.form.description'),
              },
              value: '',
              type: 'html',
              isRequired: true,
              isTranslatable: true,
            },
            slug: {
              props: {
                  label: this.$tr('ui.form.slug'),
              },
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: true,
            },
            summary: {
              props: {
                  label: this.$tr('qevent.layout.form.summary'),
              },
              value: '',
              type: 'textarea',
              isRequired: true,
              isTranslatable: true,
            },
            metaTitle: {
              props: {
                label: this.$tr('ui.form.metaTitle'),
              },
              value: '',
              type: 'text',
              isTranslatable: true,
            },
            metaDescription: {
              props: {
                label: this.$tr('ui.form.metaDescription'),
              },
              value: '',
              type: 'textarea',
              isTranslatable: true,
            },
            metaKeywords: {
              props: {
                label: this.$tr('qevent.layout.form.metaKeywords'),
              },
              value: '',
              type: 'text',
              isTranslatable: true,
            },
            mediasMulti: {
              props: {
                label: this.$tr('ui.form.gallery'),
              },
              value: {},
              type: 'media',
              zone: 'gallery',
              entity: "Modules\\Ievent\\Entities\\Event",
              enitityId: null
            },
          },
          formRight: {
            startDate: {
              props: {
                label: this.$tr('qevent.layout.form.startDate'),
                  //type: 'datetime'
              },
              value: '',
              type: 'date',
              isTranslatable: false,
            },
            endDate: {
              props: {
                  label: this.$tr('qevent.layout.form.endDate'),
                  //type: 'datetime'
              },
              value: '',
              type: 'date',
              isTranslatable: false,
            },
            address:{
              props: {
                label: this.$tr('ui.form.address'),
              },
              value: '',
              type: 'text',
              isTranslatable: false,
            },
            status: {
              props: {
                  label: `${this.$tr('ui.form.status')}:`,
                  options: [
                      {label: this.$tr('ui.form.publish'), value: 2},
                      {label: this.$tr('ui.form.noPublish'), value: 3},
                      {label: this.$tr('ui.form.draft'), value: 0},
                      {label: this.$tr('ui.form.pending'), value: 1}
                  ],
              },
              value: null,
              type: 'select',
            },
            allDay: {
              props: {
                  label: this.$tr('qevent.layout.form.allDay'),
                  options: [
                      {label: this.$tr('ui.label.yes'), value: '1'},
                      {label: this.$tr('ui.label.no'), value: '0'},
                  ],
              },
              value: null,
              type: 'select',
            },
            price:{
              props: {
                label: this.$tr('ui.form.price'),
              },
              value: '',
              type: 'number',
              isTranslatable: false,
            },
            organizerId: {
              props: {
                label: this.$tr('qevent.layout.form.organizer'),
              },
              value: null,
              type: 'select',
              clearable: true,
              loadOptions: {
                apiRoute: 'apiRoutes.qevent.organizers',
                select: {label: 'name', id: 'id'},
                requestParams: {}
              }
            },
            categories: {
              value: [],
              type: 'crud',
              props: {
                  crudType: 'select',
                  crudData: import('@imagina/qevent/_crud/crudQeventCategories'),
                  crudProps: {
                      label: this.$trp('ui.form.category'),
                      multiple : true,
                      useChips : true
                  },
              },
            },
            mediasSingle: {
              label: this.$tr('ui.form.image'),
              value: {},
              type: 'media',
              zone: 'mainimage',
              entity: "Modules\\Ievent\\Entities\\Event",
              enitityId: null
            }
          },
        }
      }
    }
  }
</script>
