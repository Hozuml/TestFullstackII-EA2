import React from "react";
import Name from "~/components/atoms/MainBanner/Name";
import Career from "~/components/atoms/MainBanner/Career";
import Button from "~/components/atoms/UniversalThings/Button";


const MainBanner: React.FC = () => {
    return (

        <div className="flex min-h-screen items-center justify-center p-4 pt-20">


            <div className="flex w-full max-w-lg flex-col items-center text-center">

                <div className="mb-8">
                    <Name>Camila Soto Rojas</Name>
                    <Career>Estudiante de Ingeniería en Informática</Career>
                </div>


                <p className="max-w-md text-gray-600 mb-8">
                    Estudiante de Ingeniería en Informática en DuocUC, San Joaquín, especializandose en el desarrollo de software y la gestión de bases de datos.               </p>


                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Button href="#project">Ver Portafolio</Button>
                    <Button href="#contact">Contacto</Button>
                </div>

            </div>
        </div>
    );
};

export default MainBanner;