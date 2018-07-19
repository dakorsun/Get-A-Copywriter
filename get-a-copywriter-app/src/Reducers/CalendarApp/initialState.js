import setCalendar from './setCalendar';
import performMonthsToRender from './performMonthsToRender';
import injectProjects from './injectProjects';
import initialProjects from './projects';
import switchScreen from './switchScreen';

    let calendar = setCalendar([2018, 10, 16]);
    calendar = injectProjects(calendar, initialProjects);

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
    projects: initialProjects,
    monthsToRender: performMonthsToRender(initialProjects),
    functions: {
        switchScreen: switchScreen
    }

}


export default initialState