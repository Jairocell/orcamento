import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

export default function OrcamentoForm() {
  const [form, setForm] = useState({
    cliente: '',
    servico: '',
    valor: '',
    validade: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const gerarPDF = () => {
    const content = document.getElementById('orcamento-pdf');
    html2pdf().from(content).save('orcamento.pdf');
  };

  return (
    <div>
      <div id="orcamento-pdf" className="border p-4 bg-white">
        <h2 className="text-xl font-semibold mb-2">Orçamento de Serviço</h2>
        <p><strong>Cliente:</strong> {form.cliente}</p>
        <p><strong>Serviço:</strong> {form.servico}</p>
        <p><strong>Valor:</strong> R$ {form.valor}</p>
        <p><strong>Validade:</strong> {form.validade} dias</p>
      </div>
      <div className="mt-4 space-y-2">
        <input name="cliente" placeholder="Cliente" onChange={handleChange} className="border p-2 w-full" />
        <input name="servico" placeholder="Serviço" onChange={handleChange} className="border p-2 w-full" />
        <input name="valor" placeholder="Valor" type="number" onChange={handleChange} className="border p-2 w-full" />
        <input name="validade" placeholder="Validade (dias)" type="number" onChange={handleChange} className="border p-2 w-full" />
        <button onClick={gerarPDF} className="mt-2 px-4 py-2 bg-blue-600 text-white">Gerar PDF</button>
      </div>
    </div>
  );
}
