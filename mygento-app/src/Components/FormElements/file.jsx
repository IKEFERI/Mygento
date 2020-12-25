import React, { useRef, useState } from 'react';
import { FieldArray } from 'formik';
import { useDropzone } from 'react-dropzone';
import {
  err as error,
  dropzone,
  cross,
  simple_input,
  full,
  filename,
} from './Input.module.sass';

const getFileSchema = file =>
  file && {
    file: file,
    type: file.type,
    name: file.name,
  };

const File = properties => {
  const { handleForm, label, name } = properties;

  const getArrayErrorsMessages = errors => {
    const result = [];
    errors &&
      Array.isArray(errors) &&
      errors.forEach(value => {
        if (typeof value === 'string') {
          result.push(value);
        } else {
          Object.values(value).forEach(error => {
            result.push(error);
          });
        }
      });
    return result;
  };
  const getError = (touched, error) => {
    return touched && error && <span key={error}> {error}. </span>;
  };

  const [isTouched, setTouched] = useState(false);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    inputRef,
  } = useDropzone();

  const fileReference = useRef('');
  const clearInput = () => {
    fileReference.current = undefined;
    acceptedFiles.length = 0;
    acceptedFiles.splice(0, acceptedFiles.length);
    inputRef.current.value = '';
    handleForm.setFieldValue(name);
  };

  return (
    <div className={simple_input}>
      <FieldArray name={name}>
        {arrayHelper => (
          <>
            <div>
              <input
                {...getInputProps()}
                multiple={false}
                onChange={event => {
                  const { files } = event.target;
                  const file = getFileSchema(files.item(0));
                  handleForm.setTouched(
                    { ...handleForm.touched, [name]: true },
                    true,
                  );
                  properties.setRefsFile(() => clearInput);
                  setTouched(() => true);
                  if (!file) {
                    arrayHelper.remove(0);
                    fileReference.current = undefined;
                  }
                  if (Array.isArray(handleForm.values[name])) {
                    arrayHelper.replace(0, file);
                    fileReference.current = file;
                  } else {
                    arrayHelper.push(file);
                    fileReference.current = file;
                  }
                }}
              />

              {fileReference.current ? (
                <div
                  className={dropzone + ' ' + full}
                  onClick={event_ => {
                    event_.preventDefault();
                    arrayHelper.remove(0);
                    clearInput();
                    handleForm.validateForm().then(() => {});
                  }}
                >
                  <span className={filename}>
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1766 2.0718C8.70472 0.599927 6.30785 0.599927 4.83754 2.0718L0.759412 6.1468C0.73285 6.17336 0.718787 6.2093 0.718787 6.2468C0.718787 6.2843 0.73285 6.32024 0.759412 6.3468L1.33597 6.92336C1.36233 6.9496 1.398 6.96433 1.43519 6.96433C1.47238 6.96433 1.50806 6.9496 1.53441 6.92336L5.61254 2.84836C6.11879 2.34211 6.79222 2.06399 7.50785 2.06399C8.22347 2.06399 8.89691 2.34211 9.4016 2.84836C9.90785 3.35461 10.186 4.02805 10.186 4.74211C10.186 5.45774 9.90785 6.12961 9.4016 6.63586L5.24535 10.7906L4.57191 11.464C3.94222 12.0937 2.91879 12.0937 2.2891 11.464C1.98441 11.1593 1.81722 10.7546 1.81722 10.3234C1.81722 9.89211 1.98441 9.48743 2.2891 9.18274L6.41254 5.06086C6.51723 4.95774 6.65472 4.89993 6.8016 4.89993H6.80316C6.95004 4.89993 7.08597 4.95774 7.1891 5.06086C7.29379 5.16555 7.35004 5.30305 7.35004 5.44993C7.35004 5.59524 7.29222 5.73274 7.1891 5.83586L3.81879 9.20305C3.79222 9.22961 3.77816 9.26555 3.77816 9.30305C3.77816 9.34055 3.79222 9.37649 3.81879 9.40305L4.39535 9.97961C4.4217 10.0059 4.45738 10.0206 4.49457 10.0206C4.53176 10.0206 4.56743 10.0059 4.59379 9.97961L7.96254 6.61086C8.27347 6.29993 8.44379 5.88743 8.44379 5.44836C8.44379 5.0093 8.27191 4.59524 7.96254 4.28586C7.32035 3.64368 6.2766 3.64524 5.63441 4.28586L5.23441 4.68743L1.51254 8.40774C1.25993 8.65886 1.05969 8.95764 0.923436 9.28675C0.787181 9.61585 0.71762 9.96873 0.718787 10.3249C0.718787 11.0484 1.0016 11.7281 1.51254 12.239C2.04222 12.7671 2.73597 13.0312 3.42972 13.0312C4.12348 13.0312 4.81722 12.7671 5.34535 12.239L10.1766 7.41086C10.8875 6.69836 11.2813 5.74993 11.2813 4.74211C11.2828 3.73274 10.8891 2.7843 10.1766 2.0718Z"
                        fill="#8C8C8C"
                      />
                    </svg>{' '}
                    {fileReference.current[name].name
                      ? fileReference.current[name].name
                      : undefined}
                  </span>
                  <span className={cross}>&#10005;</span>
                </div>
              ) : (
                <div
                  {...getRootProps({ className: 'dropzone' })}
                  className={dropzone}
                >
                  <span className={cross}>&#10005;</span> {label}
                </div>
              )}
            </div>
          </>
        )}
      </FieldArray>

      <span className={error}>
        {Array.isArray(handleForm.errors[name])
          ? getArrayErrorsMessages(handleForm.errors[name]).map(error =>
              getError(true, error),
            )
          : isTouched
          ? handleForm.errors[name]
          : undefined}
      </span>
    </div>
  );
};

export default File;
