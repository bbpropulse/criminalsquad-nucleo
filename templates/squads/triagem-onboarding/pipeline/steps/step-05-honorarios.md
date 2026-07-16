---
step: "05"
name: "Proposta de Honorários"
type: agent
agent: honorarios
depends_on: step-04
---

# Step 05: Hugo Honorários — Proposta de Honorários

## Para o Pipeline Runner

Executar a montagem da proposta e da minuta de honorários pela persona **Hugo Honorários** (`agents/honorarios.custom.md`), que se apoia nos subagentes nativos `.claude/agents/cobranca-honorarios.md` e `.claude/agents/minuta-contrato-servicos.md`.

O Hugo deve, a partir da viabilidade da triagem (`output/triagem.md`) e do onboarding (`output/onboarding.md`), montar a **proposta de honorários** (entrada fixa + eventual percentual de êxito, formas de pagamento, custas e despesas) e a **minuta do contrato de prestação de serviços** (EAOAB art. 22; Súmula 16/2007 OAB), pronta para assinatura. Usar a tabela da OAB seccional como piso e NUNCA redigir cláusula de êxito como garantia de resultado.

## Inputs para este Step

- `output/triagem.md` → viabilidade (complexidade, prazo, custo, risco) que baliza a faixa de honorários
- `output/onboarding.md` → dados do cliente e documentos do onboarding (o contrato integra esse pacote)
- `_criminalsquad/_memory/company.md` → tabela/política de honorários do escritório
- Best-practice de referência (não duplicar): `_criminalsquad/core/best-practices/etica-oab-sigilo.md` (vedação de aviltamento e de promessa de resultado)

## Expected Outputs

- `output/proposta-honorarios.md` → proposta + minuta de contrato, contendo:
  - **Resumo do serviço** (objeto, instância/ato coberto)
  - **Honorários:** entrada fixa + eventual ad exitum (percentual sobre o resultado, se houver), com base na viabilidade
  - **Formas de pagamento** (à vista / parcelado) e reajuste, se aplicável
  - **Custas e despesas** reembolsáveis (separadas dos honorários)
  - **Minuta do contrato** de prestação de serviços (EAOAB 22; Súmula 16/2007 OAB) com hipóteses de rescisão
  - Observância da tabela da OAB seccional como piso (sem aviltamento)

## Execution Mode

- **Modo:** Inline
- **Skills:** Nenhuma
- **Apoio:** subagentes nativos `cobranca-honorarios` e `minuta-contrato-servicos`

## Quality Gate

Antes de avançar para o Step 06:
- [ ] `output/proposta-honorarios.md` existe
- [ ] Os honorários estão coerentes com a viabilidade da triagem
- [ ] Eventual cláusula de êxito está redigida como remuneração de resultado (NÃO como garantia)
- [ ] Custas/despesas reembolsáveis estão separadas dos honorários
- [ ] A minuta de contrato (EAOAB 22; Súmula 16/2007) está presente com hipóteses de rescisão
- [ ] Os valores respeitam o piso da OAB seccional (sem aviltamento)
