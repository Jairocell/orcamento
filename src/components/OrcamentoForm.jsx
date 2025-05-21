import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

export default function OrcamentoForm() {
  const [form, setForm] = useState({
    numero: '',
    cliente: '',
    servico: '',
    valor: '',
    validade: '',
    garantia: '',
    observacao: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const gerarPDF = () => {
    const content = document.getElementById('orcamento-pdf');
    html2pdf().from(content).set({
      margin: 0.5,
      filename: `orcamento_${form.numero || 'gerado'}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).save();
  };

  return (
    <div>
      <div id="orcamento-pdf" className="border p-6 bg-white text-sm">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <div>
            <h2 className="text-xl font-bold">Minha Empresa</h2>
            <p>CNPJ: 00.000.000/0001-00</p>
            <p>contato@empresa.com</p>
          </div>
          <img src="https://via.placeholder.com/100x50" alt="Logo" className="h-12" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Orçamento #{form.numero}</h3>
        <p><strong>Cliente:</strong> {form.cliente}</p>
        <p><strong>Serviço:</strong> {form.servico}</p>
        <p><strong>Valor:</strong> R$ {form.valor}</p>
        <p><strong>Validade:</strong> {form.validade} dias</p>
        <p><strong>Garantia:</strong> {form.garantia}</p>
        <p><strong>Observações:</strong> {form.observacao}</p>
      </div>

      <div className="mt-4 space-y-2">
        <input name="numero" placeholder="Nº do Orçamento" onChange={handleChange} className="border p-2 w-full" />
        <input name="cliente" placeholder="Cliente" onChange={handleChange} className="border p-2 w-full" />
        <input name="servico" placeholder="Serviço" onChange={handleChange} className="border p-2 w-full" />
        <input name="valor" placeholder="Valor" type="number" onChange={handleChange} className="border p-2 w-full" />
        <input name="validade" placeholder="Validade (dias)" type="number" onChange={handleChange} className="border p-2 w-full" />
        <input name="garantia" placeholder="Garantia" onChange={handleChange} className="border p-2 w-full" />
        <textarea name="observacao" placeholder="Observações" onChange={handleChange} className="border p-2 w-full" />
        <button onClick={gerarPDF} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Gerar PDF</button>
      </div>
    </div>
  );
}
