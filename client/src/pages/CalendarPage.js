import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import { getColor } from '../utils/colors';

import {
    Row,
    Col,
} from 'reactstrap';

import Page from '../components/Page';

const today = new Date();
const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7,
);

class CalendarPage extends React.Component {

    componentDidMount() {
        // this is needed, because InfiniteCalendar forces window scroll
        window.scrollTo(0, 0);
    }

    render() {
        const primaryColor = getColor('primary');
        const secondaryColor = getColor('secondary');
        return (

            <Page>
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <InfiniteCalendar
                            selected={today}
                            minDate={lastWeek}
                            width="100%"
                            theme={{
                                accentColor: primaryColor,
                                floatingNav: {
                                    background: secondaryColor,
                                    chevron: primaryColor,
                                    color: '#FFF',
                                },
                                headerColor: primaryColor,
                                selectionColor: secondaryColor,
                                textColor: {
                                    active: '#FFF',
                                    default: '#333',
                                },
                                todayColor: secondaryColor,
                                weekdayColor: primaryColor,
                            }}
                        />
                    </Col>
                </Row>
            </Page>

            // Recrear un Modal con los eventos programados para el equipo 

        );
    }


}

export default CalendarPage;