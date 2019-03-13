/**
 * AddPointForm
 */

import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Label, Form } from 'semantic-ui-react';

// Actions
import { postData } from '../../../../services/data/actions';

class AddPointForm extends React.PureComponent {
  state = {
    value: '',
    error: false
  };

  handleChange = (event, { value }) => {
    if (this.state.error) {
      this.setState({ error: false, value })
    } else {
      this.setState({ value });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const numberValue = Number(value);
    if (isNaN(numberValue)) {
      this.setState({ error: true });
    } else {
      this.props.postData(numberValue);
    }
  }

  render() {
    const { value, error } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field error={error} style={{ width: 135 }}>
          <Input
            size="large"
            onChange={this.handleChange}
            value={value}
          />
          {error && (
            <Label basic color="red" pointing>
              {'Enter a valid numeric value'}
            </Label>
          )}
        </Form.Field>
        <Button type="submit" size="large" primary>
          Add to chart
        </Button>
      </Form>
    );
  }
}


export default connect(null, { postData })(AddPointForm);