export default function Projects({ projects }: { projects: any[] }) {
  return (
    <div className="space-y-4">
      {projects.map((proj, idx) => (
        <div key={idx} className="border p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold">{proj.name}</h3>
          {proj.link && (
            <a href={proj.link} className="text-blue-600 text-sm" target="_blank">
              {proj.link}
            </a>
          )}
          {proj.github && (
            <a href={proj.github} className="text-blue-600 text-sm ml-2" target="_blank">
              GitHub
            </a>
          )}
          <p className="mt-2 text-gray-700">{proj.description}</p>
          <p className="text-sm text-gray-500 mt-1">
            Tech: {proj.technologies.join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
}
