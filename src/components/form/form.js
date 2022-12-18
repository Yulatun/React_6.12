import React from 'react';
import Input from '../input/input';
import TextArea from '../textarea/textarea';
import HelperText from '../helperText/helperText';
import Button from '../button/button';
import DisplayCounter from '../displayCounter/displayCounter';
import './form.css';

const notEmptyValidator = (value) =>
  value ? '' : 'Поле пустое. Заполните пожалуйста';

const notEmptyDateValidator = (value) =>
  value ? '' : 'Пожалуйста, выберете дату';

const firstCapitalLetterValidator = (value) =>
  value[0].toUpperCase() === value[0]
    ? ''
    : 'Первая буква должна быть заглавной';
const letterOfAlphabetValidator = (value) =>
  value.match(/^[A-Za-z]+$/) ? '' : 'Используйте буквы';

const webSiteValidator = (value) =>
  value.match(
    /https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  )
    ? ''
    : 'поле «Сайт» должно начинаться с https:// ';

const charactersCounter = (value) =>
  value.length >= 600 ? '«Превышен лимит символов в поле»' : '';

const telephoneValidator = (value) =>
  value.match(/^[0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/)
    ? ''
    : 'Телефон должен быть в формате: 7-7777-77-77';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: '',
        lastName: '',
        site: '',
        about: '',
        stack: '',
        project: '',
        date: '',
        tel: '',
      },
      errors: {
        name: '',
        lastName: '',
        site: '',
        about: '',
        stack: '',
        project: '',
        date: '',
        tel: '',
      },
    };
    this.validation = {
      name: [
        notEmptyValidator,
        firstCapitalLetterValidator,
        letterOfAlphabetValidator,
      ],
      lastName: [
        notEmptyValidator,
        firstCapitalLetterValidator,
        letterOfAlphabetValidator,
      ],
      date: [notEmptyDateValidator],
      site: [notEmptyValidator, webSiteValidator],
      about: [notEmptyValidator, charactersCounter],
      stack: [notEmptyValidator, charactersCounter],
      project: [notEmptyValidator, charactersCounter],
      tel: [notEmptyValidator, telephoneValidator],
    };
  }

  handleValidation(fieldName, validators, newValue) {
    const errors = this.state.errors;
    let validationResult = '';
    for (let i = 0; i < validators.length; i++) {
      const v = validators[i];
      validationResult = v(newValue);
      if (validationResult) {
        break;
      }
    }

    errors[fieldName] = validationResult;
    this.setState({ errors });
  }

  contactSubmit(e) {
    e.preventDefault();
    const allFieldsName = Object.keys(this.validation);
    allFieldsName.forEach((name) =>
      this.handleValidation(
        name,
        this.validation[name],
        this.state.fields[name]
      )
    );
    if (Object.values(this.state.errors).every((e) => !e)) {
      this.props.onChangePage(this.state.fields);
    }
  }

  handleChange(fieldName, validators, e) {
    let fields = this.state.fields;
    let newValue = e.target.value;
    fields[fieldName] = newValue;
    this.setState({ fields });
    this.handleValidation(fieldName, validators, newValue);
  }

  allReset() {
    this.setState({ errors: {}, fields: {} });
  }

  render() {
    const maxNumberOfCharactersInTextArea = 600;

    return (
      <form id='userData' className='form-field'>
        <Input
          title='Имя'
          placeholder='Имя'
          htmlFor='name'
          className='input-form'
          value={this.state.fields.name}
          onChange={this.handleChange.bind(this, 'name', this.validation.name)}
        ></Input>
        <HelperText value={this.state.errors.name}></HelperText>

        <Input
          type='text'
          title='Фамилия'
          placeholder='Фамилия'
          htmlFor='lastName'
          className='input-form'
          value={this.state.fields.lastName}
          onChange={this.handleChange.bind(
            this,
            'lastName',
            this.validation.lastName
          )}
        />
        <HelperText value={this.state.errors.lastName}></HelperText>

        <Input
          title='Дата Рождения'
          htmlFor='name'
          type='date'
          className='input-form'
          onChange={this.handleChange.bind(this, 'date', this.validation.date)}
          value={this.state.fields.date}
        />
        <HelperText value={this.state.errors.date}></HelperText>

        <Input
          title='Телефон'
          placeholder='+370'
          htmlFor='phone'
          type='tel'
          className='input-form'
          onChange={this.handleChange.bind(this, 'tel', this.validation.tel)}
          value={this.state.fields.tel}
        ></Input>
        <HelperText value={this.state.errors.tel}></HelperText>

        <Input
          title='Сайт'
          placeholder='https://'
          htmlFor='site'
          className='input-form'
          onChange={this.handleChange.bind(this, 'site', this.validation.site)}
          value={this.state.fields.site}
        />
        <HelperText value={this.state.errors.site}></HelperText>

        <TextArea
          rows='7'
          title='О себе'
          placeholder='О себе'
          htmlFor='About'
          maxLength={maxNumberOfCharactersInTextArea}
          className='textarea-form'
          onChange={this.handleChange.bind(
            this,
            'about',
            this.validation.about
          )}
          value={this.state.fields.about}
        />

        <div className='textarea-text-helpers-box'>
          {this.state.errors.about ? (
            <HelperText value={this.state.errors.about}></HelperText>
          ) : (
            <DisplayCounter
              className='box-display-letters-counter'
              restNumber={
                maxNumberOfCharactersInTextArea -
                (this.state.fields.about || '').length
              }
              allNumber={maxNumberOfCharactersInTextArea}
              text={'Осталось символов:'}
            />
          )}
        </div>
        <TextArea
          rows='7'
          title='Стек технологий'
          placeholder='Стек технологий'
          htmlFor='stack'
          maxLength={maxNumberOfCharactersInTextArea}
          className='textarea-form'
          onChange={this.handleChange.bind(
            this,
            'stack',
            this.validation.stack
          )}
          value={this.state.fields.stack}
        />
        <div className='textarea-text-helpers-box'>
          {this.state.errors.stack ? (
            <HelperText value={this.state.errors.stack}></HelperText>
          ) : (
            <DisplayCounter
              className='box-display-letters-counter'
              restNumber={
                maxNumberOfCharactersInTextArea -
                (this.state.fields.stack || '').length
              }
              allNumber={maxNumberOfCharactersInTextArea}
              text={'Осталось символов:'}
            />
          )}
        </div>
        
        <TextArea
          rows='7'
          title='Описание последнего проекта'
          placeholder='Описание последнего проекта'
          htmlFor='project'
          maxLength={maxNumberOfCharactersInTextArea}
          className='textarea-form'
          onChange={this.handleChange.bind(
            this,
            'project',
            this.validation.project
          )}
          value={this.state.fields.project}
        />
        <div className='textarea-text-helpers-box'>
          {this.state.errors.project ? (
            <HelperText value={this.state.errors.project}></HelperText>
          ) : (
            <DisplayCounter
              className='box-display-letters-counter'
              restNumber={
                maxNumberOfCharactersInTextArea -
                (this.state.fields.project || '').length
              }
              allNumber={maxNumberOfCharactersInTextArea}
              text={'Осталось символов:'}
            />
          )}
        </div>

        <div className='btn-block'>
          <Button
            className='reset'
            text='Отмена'
            type='reset'
            onClick={this.allReset.bind(this)}
          />
          <Button
            className='save'
            text='Сохранить'
            type='submit'
            onClick={this.contactSubmit.bind(this)}
          />
        </div>
      </form>
    );
  }
}

export default Form;
