import { useState } from "react";


const Modal1 = () => {

    const [modalOpen, setmodalOpen] = useState<boolean>(false);

    const handleModal = () => {
        setmodalOpen(!modalOpen);
    }

    return (
        // CONTENEDOR PRINCIPAL - Layout horizontal
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mx-auto container pb-10 sm:py-16 py-5 gap-8 sm:gap-0">

            {/* SECCIÓN DE TEXTO - Lado izquierdo */}
            <div className="flex flex-col justify-center items-start gap-6 px-3">

                {/* TÍTULO con gradiente */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mx-auto">
                    Elegancia en el Jardín
                </h2>

                {/* PÁRRAFO 1 - Destacado más grande */}
                <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
                    El estilo clásico japonés se caracteriza por su elegancia atemporal y su profundo respeto por la naturaleza. Esta joven representa la armonía perfecta entre la tradición y la modernidad, vistiendo un uniforme escolar que simboliza disciplina y dedicación.
                </p>

                {/* PÁRRAFO 2 */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    En medio de un jardín floreciente, rodeada de vibrantes flores rojas, captura un momento de serenidad y reflexión. Su postura contemplativa nos invita a apreciar la belleza de los pequeños detalles que a menudo pasamos por alto en nuestra vida cotidiana.
                </p>

                {/* PÁRRAFO 3 */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    El contraste entre el uniforme oscuro y las flores coloridas crea una composición visual cautivadora, recordándonos que la verdadera elegancia reside en la simplicidad y en la conexión genuina con el entorno natural.
                </p>

                {/* PÁRRAFO 4 */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Esta escena nos transporta a un momento de paz, donde el tiempo parece detenerse y la belleza de la juventud se entrelaza con la efímera floración de la naturaleza, creando un recuerdo eterno de primavera y renovación.
                </p>
            </div>

            {/* SECCIÓN DE IMAGEN - Lado derecho */}
            <div className="w-full max-w-[350px] sm:max-w-[500px] mx-auto">
                <img
                    onClick={handleModal}
                    className="w-full h-full object-cover cursor-pointer hover:brightness-30 transition-all duration-500"
                    src="https://cdn.pixabay.com/photo/2023/02/07/16/42/vietnamese-woman-7774554_1280.jpg"
                    alt="Thumbnail"
                />
            </div>

            {
                modalOpen && (
                    <div
                        onClick={handleModal}
                        className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white p-10 rounded-2xl max-w-2xl max-h-[85vh] overflow-y-auto relative shadow-2xl">


                            {/* Botón cerrar */}
                            <button
                                className="absolute top-4 right-6 text-4xl font-bold text-gray-400 hover:text-red-500 transition-colors"
                                onClick={() => setmodalOpen(false)}
                            >
                                ×
                            </button>

                            {/* Título del modal */}
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-6 pr-8">
                                El Arte de la Contemplación
                            </h3>

                            {/* Contenido del modal */}
                            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                                En la cultura japonesa, existe un concepto llamado "mono no aware" (物の哀れ), que se traduce como la sensibilidad hacia la efímera belleza de las cosas. Esta joven estudiante encarna perfectamente este concepto mientras contempla las flores del jardín.
                            </p>

                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                                El uniforme escolar, conocido como "seifuku", representa más que una simple vestimenta. Es un símbolo de pertenencia, disciplina y el paso de la niñez a la madurez. El color oscuro contrasta intencionalmente con la vitalidad del jardín, creando un diálogo visual entre la estructura de la educación y la libertad de la naturaleza.
                            </p>

                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                                Las flores rojas que la rodean podrían ser camelias o azaleas, flores tradicionales en los jardines japoneses que florecen en primavera. Cada pétalo es un recordatorio de que la belleza es temporal, y por eso mismo, más preciosa. Este momento capturado es irrepetible: estas flores caerán, la estación cambiará, y ella crecerá.
                            </p>

                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                                Su postura, ligeramente inclinada, muestra respeto hacia la naturaleza. No arranca las flores, simplemente las observa. Esta actitud contemplativa es fundamental en la filosofía oriental: aprender a estar presente, a observar sin poseer, a apreciar sin destruir.
                            </p>

                            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                                Esta imagen nos recuerda que en medio de nuestras rutinas diarias, siempre hay espacio para detenernos, respirar profundo, y reconectar con la belleza simple que nos rodea. A veces, todo lo que necesitamos es un jardín, un momento de silencio, y la voluntad de estar verdaderamente presentes.
                            </p>

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Modal1;
