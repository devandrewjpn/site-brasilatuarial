import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUsForm = () => {
  const { register, handleSubmit, formState: { errors,isLoading } } = useForm();
  const [sendinBtn,setSendinBtn] = useState('Enviar!!')
  const [disabledBtn,setDisabledBtn] = useState(false)

  const onSubmit = async (data) => {

    setSendinBtn('Enviando..')
    setDisabledBtn(true)

    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const response = await fetch('https://atuarial-send-form.vercel.app/sendEmail', {
      method: 'POST',
      mode:"cors",
      headers: headers,
      body: JSON.stringify({
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        mensagem: data.mensagem,
      })
    })

    const statusCode = response.status;

    if(statusCode === 201) {
      toast.success("E-mail enviado com sucesso!")
    } else {
      toast.error("Algo deu errado..")
    }

    setSendinBtn('Enviar!!')
    setDisabledBtn(false)
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="box">
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input type="text" {...register('nome')} className="inputText" required />
              <span className="floating-label">Nome:</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input type="text" {...register('email')} className="inputText" required />
              <span className="floating-label">Email:</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-35">
              <input type="text" {...register('telefone')} className="inputText" required />
              <span className="floating-label">Telefone:</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea  {...register('mensagem')} className="textareaText"></textarea>
              <span className="floating-label-2">Mensagem...</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__btn-box">
              <button type="submit" disabled={disabledBtn} className="submit-btn w-100">{sendinBtn}</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
