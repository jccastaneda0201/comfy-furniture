import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type="submit"
      className="btn btn-block rounded-xl bg-gradient-to-r from-[#0e4b8b] to-[#4da6e7] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner loading-sm mr-2 text-white"></span>
          Enviando...
        </>
      ) : (
        text || 'Enviar'
      )}
    </button>
  );
};
export default SubmitBtn;
