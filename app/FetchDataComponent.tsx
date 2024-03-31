// FetchDataComponent.tsx
import { useEffect, useClient } from 'react';

function FetchDataComponent({ onDataFetched }) {
    const [salles, setSalles] = useClient([]); // Utilisation de useClient au lieu de useState

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9000/salles');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setSalles(data);
                onDataFetched(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [onDataFetched, setSalles]); // Ajout de setSalles comme dépendance

    return null;
}

export default FetchDataComponent;
