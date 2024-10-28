import React from 'react';

const JobDescription = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Cybersecurity Engineer</h2>

      <h3 className="text-lg font-semibold mb-2">Job Description</h3>
      <p className="mb-4">
        We are looking for a dedicated Cybersecurity Engineer to join our team. You will be responsible for protecting our company’s systems and data from cyber threats. Your role will include implementing security measures, monitoring systems for breaches, and responding to incidents.
      </p>

      <h3 className="text-lg font-semibold mb-2">Key Responsibilities</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Design and implement secure network solutions.</li>
        <li>Monitor and analyze security events and alerts.</li>
        <li>Conduct vulnerability assessments and penetration tests.</li>
        <li>Respond to and investigate security incidents.</li>
        <li>Develop and enforce security policies and procedures.</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Required Skills & Experience</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Bachelor's degree in Computer Science, Information Technology, or a related field.</li>
        <li>3+ years of experience in cybersecurity or related field.</li>
        <li>Strong knowledge of firewalls, VPNs, IDS/IPS, and security protocols.</li>
        <li>Experience with security frameworks (e.g., NIST, ISO 27001).</li>
        <li>Familiarity with cloud security (AWS, Azure, etc.).</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Security Information and Event Management (SIEM) tools (e.g., Splunk, ELK).</li>
        <li>Endpoint protection platforms (e.g., CrowdStrike, McAfee).</li>
        <li>Network security tools (e.g., Wireshark, Nessus).</li>
        <li>Scripting languages (e.g., Python, Bash).</li>
        <li>Operating systems: Windows, Linux, MacOS.</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Preferred Qualifications</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Certifications such as CISSP, CISM, or CEH.</li>
        <li>Experience with incident response and forensics.</li>
        <li>Strong analytical and problem-solving skills.</li>
        <li>Excellent communication and teamwork abilities.</li>
      </ul>

      <p className="text-gray-600">
        If you are passionate about cybersecurity and eager to make a difference, we encourage you to apply!
      </p>
    </div>
  );
};

export default JobDescription;
