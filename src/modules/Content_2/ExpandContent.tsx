import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({}) => ({}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

type Props = {
  itemActive: number | undefined;
  setItemActive: React.Dispatch<React.SetStateAction<number | undefined>>;
};
export default function ExpandContent(props: Props) {
  const { itemActive, setItemActive } = props;
  const { t } = useTranslation();

  const handleSelectItem = (id: number) => {
    if (id === itemActive) {
      setItemActive(undefined);
    } else {
      setItemActive(id);
    }
  };
  return (
    <div className="block md:hidden">
      <Accordion
        expanded={itemActive === 1}
        onChange={() => handleSelectItem(1)}
      >
        <AccordionSummary
          className={`${
            itemActive === 1
              ? "!bg-primary-200 !text-white"
              : "!bg-white !text-primary-200"
          }`}
          expandIcon={
            <ExpandMoreIcon
              className={`${
                itemActive === 1 ? "text-white" : "text-primary-200"
              }`}
              sx={{
                fontSize: "32px",
              }}
            />
          }
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <strong className="font-bold pt-[18px] px-0 pb-5 text-base">
            {t("supply_chain_solutions")}
          </strong>
        </AccordionSummary>
        <AccordionDetails className="text-white bg-[linear-gradient(rgba(103,58,183,0.8),rgba(75,0,130,0.8)),url('/images/Supply-Chain.jpg')] bg-center bg-cover">
          <h3 className="uppercase mb-4 font-bold text-[1.5rem] hyphens-auto">
            {t("supply_chain_des")}
          </h3>
          <p className="text-base hyphens-auto font-normal">
            {t("supply_chain_content")}
          </p>
          <div className="flex pb-8">
            <a
              href="#"
              className="mt-4 text-white border-[2px] border-white uppercase font-bold py-[13px] px-[40px] flex min-h-[48px]"
            >
              {t("learn_more")}
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={itemActive === 2}
        onChange={() => handleSelectItem(2)}
      >
        <AccordionSummary
          className={`${
            itemActive === 2
              ? "!bg-primary-200 !text-white"
              : "!bg-white !text-primary-200"
          }`}
          expandIcon={
            <ExpandMoreIcon
              className={`${
                itemActive === 1 ? "text-white" : "text-primary-200"
              }`}
              sx={{
                fontSize: "32px",
              }}
            />
          }
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <strong className="font-bold pt-[18px] px-0 pb-5 text-base">
            {t("warehousing")}
          </strong>
        </AccordionSummary>
        <AccordionDetails className="text-white bg-[linear-gradient(rgba(103,58,183,0.8),rgba(75,0,130,0.8)),url('/images/web-design.png')] bg-center bg-cover">
          <h3 className="uppercase mb-4 font-bold text-[1.5rem] hyphens-auto">
            {t("ware_des")}
          </h3>
          <p className="text-base hyphens-auto font-normal">
            {t("trans_content")}
          </p>
          <div className="flex pb-8">
            <a
              href="#"
              className="mt-4 text-white border-[2px] border-white uppercase font-bold py-[13px] px-[40px] flex min-h-[48px]"
            >
              {t("learn_more")}
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={itemActive === 3}
        onChange={() => handleSelectItem(3)}
      >
        <AccordionSummary
          className={`${
            itemActive === 3
              ? "!bg-primary-200 !text-white"
              : "!bg-white !text-primary-200"
          }`}
          expandIcon={
            <ExpandMoreIcon
              className={`${
                itemActive === 1 ? "text-white" : "text-primary-200"
              }`}
              sx={{
                fontSize: "32px",
              }}
            />
          }
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <strong className="font-bold pt-[18px] px-0 pb-5 text-base">
            {t("transport")}
          </strong>
        </AccordionSummary>
        <AccordionDetails className="text-white bg-[linear-gradient(rgba(103,58,183,0.8),rgba(75,0,130,0.8)),url('/images/backend.png')] bg-center bg-cover">
          <h3 className="uppercase mb-4 font-bold text-[1.5rem] hyphens-auto">
            {t("trans_des")}
          </h3>
          <p className="text-base hyphens-auto font-normal">
            {t("trans_content")}
          </p>
          <div className="flex pb-8">
            <a
              href="#"
              className="mt-4 text-white border-[2px] border-white uppercase font-bold py-[13px] px-[40px] flex min-h-[48px]"
            >
              {t("learn_more")}
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
