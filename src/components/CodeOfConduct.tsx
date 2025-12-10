import React from 'react';

interface CodeOfConductProps {
  onBack: () => void;
  language?: 'en' | 'es';
}

const CodeOfConduct: React.FC<CodeOfConductProps> = ({ onBack, language = 'en' }) => {
  if (language === 'es') {
    return (
      <div className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-300">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-neon-green hover:text-white transition-colors font-mono"
        >
          <span>&larr;</span> Volver al Inicio
        </button>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
          <span className="text-neon-purple">#</span> Código de Conducta
        </h1>

        <div className="space-y-6 text-lg leading-relaxed">
          <div className="bg-gray-900/50 p-6 border-l-4 border-neon-green rounded-r">
            <p className="italic text-gray-200">
              "Nuestro código de conducta se basa en principios simples: Mostrar respeto y tolerancia por la singularidad de cada uno. Ser amable y practicar la regla de oro."
            </p>
          </div>

          <p>
            BSides Málaga se dedica a proporcionar un ambiente seguro, constructivo, inclusivo y agradable para todos. Animamos a todos los participantes a hacer que los demás se sientan bienvenidos e incluidos en las actividades durante toda la conferencia.
          </p>

          <p className="font-bold text-white">
            Tenemos <span className="text-red-500">CERO TOLERANCIA</span> hacia el acoso de cualquier tipo, ya sea físico, verbal o sexual. Definimos el acoso como cualquier comunicación o comportamiento no deseado u ofensivo, tanto online como offline.
          </p>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 mt-8">El comportamiento no aceptado incluye, pero no se limita a:</h3>
            <ul className="list-disc pl-6 space-y-2 marker:text-neon-purple">
              <li>Bromas y lenguaje discriminatorio</li>
              <li>Publicar o mostrar material sexualmente explícito o violento</li>
              <li>Publicar (o amenazar con publicar) información de identificación personal de otras personas ("doxing")</li>
              <li>Insultos personales, particularmente aquellos relacionados con género, orientación sexual, raza, religión o discapacidad</li>
              <li>Acoso repetido a otros</li>
              <li>Violencia, amenazas de violencia o lenguaje violento dirigido contra otra persona</li>
              <li>Bromas y lenguaje sexista, racista, homófobo, transfóbico, capacitista o discriminatorio de cualquier otro tipo</li>
              <li>Fotografía o grabación inapropiada</li>
              <li>Atención sexual no deseada, incluyendo comentarios o bromas sexualizadas, mensajes inapropiados, lenguaje, tocamientos y avances sexuales no deseados</li>
              <li>Intimidación deliberada, acecho o seguimiento (online o en persona)</li>
              <li>Interrupción sostenida de eventos comunitarios, incluyendo charlas y presentaciones</li>
              <li>Denigración o insultos basados en creencias políticas o ideología</li>
              <li>Abogar por, o alentar, cualquiera de los comportamientos anteriores</li>
            </ul>
          </div>

          <p className="bg-gray-800/50 p-4 rounded text-white font-medium border border-gray-700">
            En general, si alguien te pide que pares, para inmediatamente.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Reporte y Cumplimiento</h3>
          
          <p>
            Si alguien se relaciona contigo de una manera que te hace sentir miedo o incomodidad durante un evento, por favor informa a un miembro de la organización o a cualquiera de nuestros voluntarios (camisetas BSides moradas o Virustotal/Google). Están capacitados para seguir una vía de escalada y te ayudarán a determinar los siguientes pasos para que te sientas seguro y asegurar que tus preocupaciones sean atendidas prontamente.
          </p>

          <p>
            Si te estás comportando mal, recibirás una advertencia de que tu comportamiento no es aceptable. Si continúas, se te pedirá que te vayas o, si el comportamiento es particularmente grave, puedes ser expulsado inmediatamente de la conferencia y se notificará a las autoridades pertinentes.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-300">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-neon-green hover:text-white transition-colors font-mono"
      >
        <span>&larr;</span> Back to Home
      </button>

      <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
        <span className="text-neon-purple">#</span> Code of Conduct
      </h1>

      <div className="space-y-6 text-lg leading-relaxed">
        <div className="bg-gray-900/50 p-6 border-l-4 border-neon-green rounded-r">
          <p className="italic text-gray-200">
            "Our code of conduct is based in simple principles: Show respect and tolerance for each other’s uniqueness. Be kind and practice the golden rule."
          </p>
        </div>

        <p>
          BSides Málaga is dedicated to providing a safe, constructive, inclusive and pleasant atmosphere for everyone. We encourage all participants to make each other feel welcome and included in activities throughout the conference.
        </p>

        <p className="font-bold text-white">
          We have <span className="text-red-500">ZERO TOLERANCE</span> for harassment of any kind, be it physical, verbal, or sexual. We define harassment as any unwanted or offensive online or offline communication or behavior.
        </p>

        <div>
          <h3 className="text-xl font-bold text-white mb-4 mt-8">Not accepted behaviour includes, but is not limited to:</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-neon-purple">
            <li>Discriminatory jokes and language</li>
            <li>Posting or displaying sexually explicit or violent material</li>
            <li>Posting (or threatening to post) other people’s personally identifying information (“doxing”)</li>
            <li>Personal insults, particularly those related to gender, sexual orientation, race, religion, or disability</li>
            <li>Repeated harassment of others</li>
            <li>Violence, threats of violence, or violent language directed against another person</li>
            <li>Sexist, racist, homophobic, transphobic, ableist, or otherwise discriminatory jokes and language</li>
            <li>Inappropriate photography or recording</li>
            <li>Unwelcome sexual attention, including sexualized comments or jokes, inappropriate messaging, language, touching, groping, and unwelcome sexual advances</li>
            <li>Deliberate intimidation, stalking, or following (online or in-person)</li>
            <li>Sustained disruption of community events, including talks and presentations</li>
            <li>Denigration or insults based on political beliefs or ideology</li>
            <li>Advocating for, or encouraging, any of the above behavior</li>
          </ul>
        </div>

        <p className="bg-gray-800/50 p-4 rounded text-white font-medium border border-gray-700">
          In general, if someone asks you to stop, then stop immediately.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Reporting & Enforcement</h3>
        
        <p>
          If someone is engaging with you in a way that makes you afraid or uncomfortable during an event, please inform a member of the organization or any of our volunteers, wearing a BSides (purple) or Virustotal/Google tee. They are trained in following an escalation path and will help determine the next steps for you to feel safe and ensure your concerns are promptly addressed.
        </p>

        <p>
          If you are engaging in bad behavior, you will be given a warning that your behavior is not acceptable. If you continue, you will be asked to leave or, if the behavior is particularly egregious, you may be immediately ejected from the conference and proper authorities notified.
        </p>
      </div>
    </div>
  );
};

export default CodeOfConduct;