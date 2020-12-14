import React, {useRef} from "react";
import {FieldArray} from "formik";
import {useDropzone} from "react-dropzone";
import {err, dropzone, cross, simple_input, full,filename} from "./Input.module.sass"

const File = (props) => {
    const {handleForm, label, name} = props;


    const getFileSchema = (file) => (file && {
        file: file,
        type: file.type,
        name: file.name
    })
    const getArrErrorsMessages = (errors) => {
        const result = []
        errors && Array.isArray(errors) && errors.forEach((value) => {
            if (typeof value === 'string') {
                result.push(value)
            } else {
                Object.values(value).forEach((error) => {
                    result.push(error)
                })
            }
        })
        return result
    }
    const getError = (touched, error) => {
        return touched && error && <span key={error}> {error}. </span>
    }

    const {
        acceptedFiles,
        getRootProps, getInputProps,
        inputRef
    } = useDropzone();


    let fileRef = useRef(null)
    const clearInput = ()=>{
        fileRef.current = null;
        acceptedFiles.length = 0
        acceptedFiles.splice(0, acceptedFiles.length)
        inputRef.current.value = ''
        handleForm.setFieldValue(name, undefined)
    }

    return (
        <div className={simple_input}>
            <FieldArray name={name}>
                {(arrayHelper) => (
                    <>
                        <div >
                            <input {...getInputProps()} multiple={false}
                                   onChange={(event) => {
                                       const {files} = event.target
                                       const file = getFileSchema(files.item(0))
                                       handleForm.setTouched({...handleForm.touched, [name]:true}, true);
                                       props.setRefsFile(()=>clearInput);
                                       if (!file) {
                                           arrayHelper.remove(0)
                                           fileRef.current = null
                                       }
                                       if (Array.isArray(handleForm.values[name])) {
                                           arrayHelper.replace(0, file)
                                           fileRef.current = file
                                       } else {
                                           arrayHelper.push(file)
                                           fileRef.current = file
                                       }

                                   }}
                            />


                            {fileRef.current ? <div className={dropzone + ' ' + full}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        arrayHelper.remove(0);
                                                        clearInput();
                                                        handleForm.validateForm().then(err => null);
                                                    }}> <span className={filename}>{fileRef.current[name].name? fileRef.current[name].name : null}</span>
                                <span className={cross}>&#10005;</span></div> : <div {...getRootProps({className: 'dropzone'})} className={dropzone}><span className={cross}>&#10005;</span> {label}</div>}
                        </div>


                    </>
                )}
            </FieldArray>


            <span
                className={err}>{Array.isArray(handleForm.errors[name]) ? getArrErrorsMessages(handleForm.errors[name]).map((error) => getError(true, error)) : handleForm.touched[name] ? handleForm.errors[name] : null} </span>
        </div>
    )
};

export default File;