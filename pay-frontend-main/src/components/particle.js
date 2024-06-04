import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleComponent = ()=>{
    const options =useMemo(()=>{
        return {
            particles:{
                move:{
                    enable:true,
                }
            }
        };
    },[])

    const particlesInit = useCallback((engine)=>{
        loadSlim(engine);
        // loadFull(engine);

    },[])
    return <Particles init={particlesInit} options={options} />
};

export default ParticleComponent
