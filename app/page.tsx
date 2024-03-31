'use client'
import { useEffect, useState } from 'react';

export default function Home() {
    const [donnees, setDonnees] = useState(null);

    useEffect(() => {
        const fetchDonnees = async () => {
            try {
                const response = await fetch('http://localhost:9000/salles');
                if (!response.ok) {
                    throw new Error('Erreur réseau');
                }
                const data = await response.json();
                setDonnees(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        fetchDonnees();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-2xl font-bold mb-4">Données :</h1>
            <pre>{JSON.stringify(donnees, null, 2)}</pre> {/* Donnée brutes formatée */}
        </main>
    );
}
