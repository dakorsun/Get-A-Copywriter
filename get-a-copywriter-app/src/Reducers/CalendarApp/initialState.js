import performMonthsToRender from './performMonthsToRender';
import initialProjects from './projects';
import setNewWidgetRender from './setNewWidgetRender';



const initialState = {
    filters: {
        isOpened: false
    },
    formats:{ 
        isOpened: false,
        list:[
            {
                name: 'Blog post',
                isChecked: true 
            },
            {
                name: 'Website page',
                isChecked: false 
            },
            {
                name: 'Article',
                isChecked: false
            },
            {
                name: 'Product description',
                isChecked: false 
            },
            {
                name: 'Press release',
                isChecked: false 
            },
            {
                name: 'Sales letter',
                isChecked: true 
            },
            {
                name: 'White paper',
                isChecked: true 
            },
            {
                name: 'Custom',
                isChecked: false 
            }
        ]
    },
    isAddPopUpOpened: false,
    projects: initialProjects,
    monthsToRender: performMonthsToRender(initialProjects),
    calendarWidget: {
        isOpened: {
            order: false,
            publish: false
        },
        container:  setNewWidgetRender('2018', '11')
        
    }

}


export default initialState