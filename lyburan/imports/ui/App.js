import React, { Component } from 'react';
import { Dropdown, Card, Image, Input, List, Icon, Button, Menu, Responsive, Container, Header, Segment, Grid, ResponsiveContainer } from 'semantic-ui-react';

export default class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    const options = [
      { key: 'angular', text: 'Angular', value: 'angular' },
      { key: 'css', text: 'CSS', value: 'css' },
      { key: 'design', text: 'Graphic Design', value: 'design' },
      { key: 'ember', text: 'Ember', value: 'ember' },
      { key: 'html', text: 'HTML', value: 'html' },
      { key: 'ia', text: 'Information Architecture', value: 'ia' },
      { key: 'javascript', text: 'Javascript', value: 'javascript' },
      { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
      { key: 'meteor', text: 'Meteor', value: 'meteor' },
      { key: 'node', text: 'NodeJS', value: 'node' },
      { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
      { key: 'python', text: 'Python', value: 'python' },
      { key: 'rails', text: 'Rails', value: 'rails' },
      { key: 'react', text: 'React', value: 'react' },
      { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
      { key: 'ruby', text: 'Ruby', value: 'ruby' },
      { key: 'ui', text: 'UI Design', value: 'ui' },
      { key: 'ux', text: 'User Experience', value: 'ux' },
    ];

    var style = {
      styleInput : {
        margin:'10px'
      },
      sliderContainer : {
        padding:'3vw 10vw 8vw 10vw'
      },
      container : {
        padding:'1vw 10vw'
      },
      flatMenu: {
        borderColor:'transparent',
        padding:'20px',
        color:'#484848'
      },
      homeTitle: {
        fontSize:'54px',
        fontWeight: '700',
        color:'#14ADB2'
      },
      homeSubtitle: {
        fontSize:'48px',
        fontWeight: '500',
        color:'#484848'
      },
      colorPrimary:{
        color:'#14ADB2'
      }
    };

    return (
    <div>
      <Menu pointing secondary style={style.flatMenu}>
        <Menu.Item  content='Lyburan' name='home' onClick={this.handleItemClick} style={style.colorPrimary}>
          <Image src='/assets/images/logo.jpg' size='tiny'/>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item  style={{height:'80px'}} content='Become Buddy' name='buddy' onClick={this.handleItemClick} />
          <Menu.Item  style={{height:'80px'}} content='Help' name='help' onClick={this.handleItemClick} />
          <Menu.Item  style={{height:'80px'}} content='Register' name='register' onClick={this.handleItemClick} />
          <Menu.Item  style={{height:'80px'}} content='Login' name='login' onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
      <Container style={style.sliderContainer}>
        <Header style={style.homeTitle}>Lyburan</Header>
        <Header style={style.homeSubtitle}>Pesan rumah dan pengalaman unik <br/> di seluruh penjuru dunia.</Header>
        <Input fluid size='massive' icon='search' iconPosition='left' placeholder='Coba "Bali"' action={{ color: 'teal', content: 'Search', size: 'huge' }} />
      </Container>
      <Container>
        <Header as='h1'>Jelajahi</Header>
        <Button color='teal' size='massive'>Buddy</Button>
        <Button color='teal' size='massive'>Homestay</Button>
        <Button color='teal' size='massive'>Event</Button>
        <Button color='teal' size='massive'>Transportation</Button>
      </Container>
      <br/>
      <br/>

      <Container>
        <Header as='h1'>Homestay</Header>
        <Header as='h3'>Temukan Rumah</Header>
        <Card.Group itemsPerRow={4}>
          <Card
            image='https://a0.muscache.com/im/pictures/014e259a-8250-415c-9994-a2305125b83d.jpg?aki_policy=large'
            header='Learn salsa at a rooftop studio'
            meta='PELAJARAN MENARI · HAVANA'
            description='Rp684.377 per orang'
          />
          <Card
            image='https://a0.muscache.com/im/pictures/014e259a-8250-415c-9994-a2305125b83d.jpg?aki_policy=large'
            header='Learn salsa at a rooftop studio'
            meta='PELAJARAN MENARI · HAVANA'
            description='Rp684.377 per orang'
          />
          <Card
            image='https://a0.muscache.com/im/pictures/014e259a-8250-415c-9994-a2305125b83d.jpg?aki_policy=large'
            header='Learn salsa at a rooftop studio'
            meta='PELAJARAN MENARI · HAVANA'
            description='Rp684.377 per orang'
          />
          <Card
            image='https://a0.muscache.com/im/pictures/014e259a-8250-415c-9994-a2305125b83d.jpg?aki_policy=large'
            header='Learn salsa at a rooftop studio'
            meta='PELAJARAN MENARI · HAVANA'
            description='Rp684.377 per orang'
          />
          <Card
            image='https://a0.muscache.com/im/pictures/014e259a-8250-415c-9994-a2305125b83d.jpg?aki_policy=large'
            header='Learn salsa at a rooftop studio'
            meta='PELAJARAN MENARI · HAVANA'
            description='Rp684.377 per orang'
          />
          <Card
            image='https://a0.muscache.com/im/pictures/014e259a-8250-415c-9994-a2305125b83d.jpg?aki_policy=large'
            header='Learn salsa at a rooftop studio'
            meta='PELAJARAN MENARI · HAVANA'
            description='Rp684.377 per orang'
          />
          <Card
            image='https://a0.muscache.com/im/pictures/014e259a-8250-415c-9994-a2305125b83d.jpg?aki_policy=large'
            header='Learn salsa at a rooftop studio'
            meta='PELAJARAN MENARI · HAVANA'
            description='Rp684.377 per orang'
          />
          <Card
            image='https://a0.muscache.com/im/pictures/014e259a-8250-415c-9994-a2305125b83d.jpg?aki_policy=large'
            header='Learn salsa at a rooftop studio'
            meta='PELAJARAN MENARI · HAVANA'
            description='Rp684.377 per orang'
          />
        </Card.Group>
      </Container>
      <br/>
      <hr/>

      <Segment vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Dropdown placeholder='Bahasa Indonesia' fluid multiple selection options={options} />
                <Dropdown placeholder='Rupiah Indonesia' fluid multiple selection options={options} />
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as='h4' content='About' />
                <List link >
                  <List.Item as='a'>Karier</List.Item>
                  <List.Item as='a'>Media</List.Item>
                  <List.Item as='a'>Kebijakan</List.Item>
                  <List.Item as='a'>Bantuan</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as='h4' content='Explore' />
                <List link>
                  <List.Item as='a'>Buddy</List.Item>
                  <List.Item as='a'>Homestay</List.Item>
                  <List.Item as='a'>Event</List.Item>
                  <List.Item as='a'>Transportation</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as='h4' content='As a Buddy' />
                <List link>
                  <List.Item as='a'>Kenapa menjadi Buddy</List.Item>
                  <List.Item as='a'>Keramahtamahan</List.Item>
                  <List.Item as='a'>Menjadi Buddy yang Ramah</List.Item>
                  <List.Item as='a'>Penghasilan Buddy</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </div>
    );
  }
}
