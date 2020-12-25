import React, { useState } from 'react';
import { Formik } from 'formik';
import FormikControl from '../FormikControl/formik-control';
import * as Yup from 'yup';
import { form, section, h2 } from './Form.module.sass';
import { err as error, button } from '../FormElements/Input.module.sass';
import { usePopup } from '../Popups/popup-context';

const Form = () => {
  const popup = usePopup();
  const popupTogglePolicy = event_ => {
    event_.preventDefault();
    popup.popupToggle('policy');
  };
  const popupToggleDone = () => {
    popup.popupToggle('done');
  };

  const checkbox = [{ key: 'done', value: 'true' }];
  const radio = [
    { key: 'male', value: 'Мужской' },
    { key: 'female', value: 'Женский' },
  ];

  const initialValues = {
    first_name: '',
    last_name: '',
    policy: false,
    sex: '',
    email: '',
    file: undefined,
    url: '',
  };
  const validationSchema = Yup.object({
    first_name: Yup.string()
      .required('Введите имя')
      .max(30, 'Слишком длинное!'),
    last_name: Yup.string()
      .required('Введите фамилию')
      .max(150, 'Слишком длинное!'),
    policy: Yup.bool()
      .required('Прочтите policy privacy')
      .oneOf([true], 'Нужно согласиться'),
    sex: Yup.string().required('Укажите пол'),
    url: Yup.string().matches(
      /(http(s)?:\/\/.)?(www\.)?[\w#%+.:=@~-]{2,256}\.[a-z]{2,6}\b([\w#%&+./:=?@~-]*)/g,
      { message: 'Введите корректную ссылку', excludeEmptyString: true },
    ),
    file: Yup.array().of(
      Yup.object().shape({
        file: Yup.mixed().test(
          'fileSize',
          'Размер файла больше 4 мбайт',
          value => {
            if (!value) return false;
            return value.size < 33554432;
          },
        ),
        type: Yup.string(),
        name: Yup.string(),
      }),
    ),
    email: Yup.string().email('Некорректный email').required('Введите email'),
  });

  const [referencesFile, setReferencesFile] = useState(() => {});
  const onSubmitSentForm = (values, onSubmitProperties) => {
    console.log(values);
    setTimeout(() => {
      popup.setNameClient(values.first_name);
      popupToggleDone();
      values.file ? referencesFile() : undefined;
      onSubmitProperties.resetForm();
      onSubmitProperties.setSubmitting(false);
    }, 800);
  };

  const Label = () => (
    <>
      Я согласен с{' '}
      <a onClick={popupTogglePolicy} href="#privacy">
        политикой конфиденциальности
      </a>
    </>
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitSentForm}
    >
      {handleForm => {
        return (
          <form
            onReset={handleForm.handleReset}
            onSubmit={handleForm.handleSubmit}
            className={form}
          >
            <fieldset className={section}>
              <legend className={h2}>Личные данные</legend>
              <FormikControl
                handleForm={handleForm}
                control="input"
                name="first_name"
                type="text"
                label="Имя *"
                placeholder="Имя"
              />
              <FormikControl
                handleForm={handleForm}
                control="input"
                name="last_name"
                type="text"
                label="Фамилия *"
                placeholder="Фамилия"
              />
              <FormikControl
                handleForm={handleForm}
                control="input"
                name="email"
                type="email"
                label="Электронная почта *"
                placeholder="Электронная почта"
              />
              <FormikControl
                handleForm={handleForm}
                setRefsFile={setReferencesFile}
                control="file"
                name="file"
                label="Загрузить резюме"
              />
            </fieldset>

            <fieldset className={section}>
              <legend className={h2}>
                Пол *{' '}
                <span className={error}>
                  {handleForm.errors.sex ? handleForm.errors.sex : undefined}
                </span>
              </legend>
              <FormikControl
                handleForm={handleForm}
                control="radio"
                name="sex"
                options={radio}
              />
            </fieldset>

            <fieldset className={section}>
              <legend className={h2}>Github</legend>
              <FormikControl
                handleForm={handleForm}
                control="input"
                name="url"
                type="text"
                label="Вставьте ссылку на Github"
                placeholder="Вставьте ссылку на Github"
              />
            </fieldset>

            <fieldset className={section}>
              <FormikControl
                control="checkbox"
                name="policy"
                label={<Label />}
                options={checkbox}
              />
              <button
                className={button}
                type="submit"
                disabled={!handleForm.isValid || handleForm.isSubmitting}
              >
                {handleForm.isSubmitting ? 'Отправка...' : 'Отправить'}
              </button>
            </fieldset>
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;
