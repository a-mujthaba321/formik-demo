import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import FormikForm from './FormikForm';

export default class App extends React.Component {

    render() {
        return (
            <div className="container-fluid">
              <div className="row">
                  <div className="col">
                  <FormikForm />
                  </div>
              </div>
            </div>
        ); 
    }
}