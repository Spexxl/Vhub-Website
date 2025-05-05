import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function PoliticasDePrivacidade() {
    return (
        <div className="relative">
            <Header />
            <div className="flex flex-col gap-10 items-center justify-center w-full bg-white px-5 py-36">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    Política e Privacidade - Vibrant Hub
                </h1>
                <div className="text-gray-600 text-lg space-y-6 max-w-4xl">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introdução</h2>
                        <p>
                            A Vibrant Hub valoriza sua privacidade e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos as informações dos usuários de nossa plataforma. Ao usar o aplicativo, você concorda com as práticas descritas nesta política.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Informações que Coletamos</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">2.1 Informações Fornecidas pelo Usuário:</h3>
                        <ul className="list-disc list-inside">
                            <li>Dados de Cadastro: Coletamos informações fornecidas por você, como nome, CPF, data de nascimento, e-mail, telefone e sexo.</li>
                            <li>Informações de Pagamento: Caso utilize nossos serviços de assinatura ou compras, dados de pagamento, como número do cartão e endereço de cobrança, podem ser coletados e gerenciados de forma segura por processadores de pagamento terceirizados.</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">2.2 Informações Automáticas:</h3>
                        <ul className="list-disc list-inside">
                            <li>Dados de Localização e Frequência: Coletamos dados de localização (com sua permissão) e a frequência com que você utiliza o aplicativo, para atividades de marketing direcionadas.</li>
                            <li>Dados de Uso do Aplicativo: Informações sobre como você usa o aplicativo, incluindo interações e comportamento no app.</li>
                            <li>Informações de Dispositivo: Coletamos dados sobre o dispositivo que você usa, como modelo, sistema operacional, identificadores únicos de dispositivo e informações de conexão.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Como Utilizamos Suas Informações</h2>
                        <ul className="list-disc list-inside">
                            <li>Gerar Recompensas: Com base em dados de localização e frequência de uso, calculamos e entregamos estatísticas do seu desempenho no treino.</li>
                            <li>Melhorar a Experiência do Usuário: Personalizamos a experiência de uso do app e aprimoramos nossas funcionalidades com base no comportamento do usuário.</li>
                            <li>Comunicação: Enviar notificações importantes, promoções, campanhas e atualizações do app.</li>
                            <li>Segurança: Garantir a segurança de sua conta e dos dados armazenados na plataforma.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Compartilhamento de Informações</h2>
                        <p>Nós não compartilhamos suas informações pessoais com terceiros, exceto:</p>
                        <ul className="list-disc list-inside">
                            <li>Processadores de Pagamento: Para facilitar transações seguras de assinaturas ou compras.</li>
                            <li>Autoridades Legais: Quando requerido por lei ou para proteger nossos direitos legais.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Segurança dos Dados</h2>
                        <p>
                            A Vibrant Hub utiliza medidas de segurança avançadas para proteger suas informações contra acessos não autorizados, alterações ou destruição. Embora adotemos todas as práticas recomendadas de segurança, como criptografia e firewalls, nenhum sistema é totalmente infalível. Trabalhamos continuamente para melhorar nossas práticas de segurança e minimizar possíveis riscos.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Cookies e Tecnologias Semelhantes</h2>
                        <p>
                            Podemos utilizar cookies e outras tecnologias de rastreamento para melhorar a experiência do usuário e analisar o tráfego do aplicativo. Você pode desativar os cookies em seu dispositivo, mas isso pode afetar algumas funcionalidades do app.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Retenção de Dados</h2>
                        <p>
                            Manteremos os seus dados pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, salvo quando um período maior for exigido por obrigações legais.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Direitos do Usuário</h2>
                        <p>
                            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Você pode revogar seu consentimento para o uso de seus dados a qualquer momento por meio do próprio aplicativo ou entrando em contato com nosso suporte.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">9. Uso por Menores de Idade</h2>
                        <p>
                            Este aplicativo não é destinado a menores de 18 anos. Caso identifiquemos o uso indevido por menores sem o consentimento dos responsáveis legais, removeremos os dados coletados e bloquearemos o acesso.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">10. Isenção de Responsabilidade</h2>
                        <p>
                            A Vibrant Hub fornece informações, sugestões de treinos e orientações com base em dados gerais e algoritmos internos, não substituindo, em hipótese alguma, a consulta ou acompanhamento por profissionais da saúde, como médicos, fisioterapeutas ou educadores físicos. Ao utilizar o aplicativo, o usuário declara estar ciente de que a prática de atividades físicas envolve riscos e assume total responsabilidade por sua execução.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">11. Alterações nesta Política de Privacidade</h2>
                        <p>
                            A Vibrant Hub pode revisar esta Política de Privacidade periodicamente. Notificaremos os usuários sobre quaisquer alterações significativas, e encorajamos você a revisar esta página regularmente.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">12. Contato</h2>
                        <p>
                            Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, ou ainda precise de suporte de qualquer tipo, entre em contato conosco:
                        </p>
                        <p className="font-semibold">E-mail: suporte@vibranthub.com.br</p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}