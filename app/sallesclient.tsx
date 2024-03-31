// Ce fichier est traité comme un composant client par défaut
import { useEffect, useState } from 'react';

const SallesClient = () => {
    const [salles, setSalles] = useState([]);

    useEffect(() => {
        const fetchSalles = async () => {
            try {
                const response = await fetch('http://localhost:9000/salles');
                if (!response.ok) {
                    throw new Error('Erreur réseau');
                }
                const data = await response.json();
                setSalles(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des salles:", error);
            }
        };

        fetchSalles();
    }, []);

    return (
        <ul>
            {salles.map((salle) => (
                <li key={salle.numero} className="mb-2">
                    <span className="font-semibold">Salle numéro:</span> {salle.numero}
                    <br />
                    <span className="font-semibold">Reservant:</span> {salle.reservant}
                    <br />
                    <span className="font-semibold">Horaires:</span>
                    <ul>
                        {salle.horaires.map((horaire, index) => (
                            <li key={index}>{horaire}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

export default SallesClient;
