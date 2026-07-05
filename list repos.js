const endpoint = 'https://api.github.com/users/mohith789p/repos';

export const getProjects = async () => {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.map(repo => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
        }));
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
};

const projects = await getProjects();
console.log(projects);
