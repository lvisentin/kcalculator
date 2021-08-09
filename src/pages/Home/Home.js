import { useState } from 'react';
import Logo from '../../components/Logo';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t, i18n } = useTranslation();

    const [age, setAge] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [activityLevel, setActivityLevel] = useState(1.2);
    const [sex, setSex] = useState('m');
    const [tmb, setTmb] = useState(0);
    const [spentCalories, setSpentCalories] = useState(0);

    function changeLanguage(lng) {
        i18n.changeLanguage(lng);
    }

    function ageInputHandleChange(e) {
        setAge(e.target.value);
    }

    function heightInputHandleChange(e) {
        setHeight(e.target.value);
    }

    function weightInputHandleChange(e) {
        setWeight(e.target.value);
    }

    function handleSexInputChange(e) {
        setSex(e.target.value);
    }

    function handleActivityLevelInputChange(e) {
        setActivityLevel(Number(e.target.value))
    }

    function isFormValid() {
        if (age <= 0 || height <= 0 || weight <= 0) {
            return false;
        }

        return true;
    }

    function calculateCalories(e) {
        e.preventDefault();
        let calculatedTmb = 0;

        if (sex === 'm') {
            calculatedTmb = (66.47 + (13.75 * weight) + (5.003 * height) - (6.775 * age));
        } else {
            calculatedTmb = (655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
        }

        setTmb(calculatedTmb);
        setSpentCalories(calculatedTmb * Number(activityLevel))
    }

    return (
        <S.MainContainer>
            <div id="backdrop"></div>
            <S.Languages>
                <S.LanguageSelector onClick={() => changeLanguage('pt-BR')}>PT </S.LanguageSelector>
                <S.LanguageSelector onClick={() => changeLanguage('en-US')}>EN</S.LanguageSelector>
            </S.Languages>

            <Logo />

            <S.Form onSubmit={calculateCalories}>
                <S.RadioGroup>
                    <S.RadioInput>
                        <S.Radio
                            checked={sex === 'm'}
                            onChange={handleSexInputChange}
                            type="radio" id="m" name="sex" value="m"
                        />
                        <label htmlFor="masc">{t('sex.male')}</label>
                    </S.RadioInput>
                    <S.RadioInput>
                        <S.Radio
                            checked={sex === 'f'}
                            onChange={handleSexInputChange}
                            type="radio" id="f" name="sex" value="f"
                        />
                        <label htmlFor="fem">{t('sex.female')}</label>
                    </S.RadioInput>
                </S.RadioGroup>

                <S.Input type="number" min="0" placeholder={t('age')} onChange={ageInputHandleChange} />

                <S.Input type="number" min="0" placeholder={t('height')} onChange={heightInputHandleChange} />

                <S.Input type="number" min="0" placeholder={t('weight')} onChange={weightInputHandleChange} />

                <div style={{ marginBottom: '1rem', width: '100%' }}>
                    <S.Title>
                        {t('activity-levels.label')}
                    </S.Title>

                    <S.RadioGroup style={{ width: '100%', margin: 0, alignItems: 'center', justifyContent: 'space-between', padding: '0 10px 0 5px' }}>
                        <S.RadioInput>
                            <S.Radio
                                checked={activityLevel === 1.2}
                                onChange={handleActivityLevelInputChange}
                                style={{ margin: 0 }}
                                type="radio" id="sedentary" name="activityLevel" value={1.2} />
                            <label htmlFor="sedentary">{t('activity-levels.sedentary')}</label>
                        </S.RadioInput>
                        <S.RadioInput>
                            <S.Radio
                                checked={activityLevel === 1.375}
                                onChange={handleActivityLevelInputChange}
                                style={{ margin: 0 }}
                                type="radio" id="light" name="activityLevel" value={1.375} />
                            <label htmlFor="light">{t('activity-levels.light')}</label>
                        </S.RadioInput>
                        <S.RadioInput>
                            <S.Radio
                                checked={activityLevel === 1.55}
                                onChange={handleActivityLevelInputChange}
                                style={{ margin: 0 }}
                                type="radio" id="moderate" name="activityLevel" value={1.55} />
                            <label htmlFor="moderate">{t('activity-levels.moderate')}</label>
                        </S.RadioInput>
                        <S.RadioInput>
                            <S.Radio
                                checked={activityLevel === 1.725}
                                onChange={handleActivityLevelInputChange}
                                style={{ margin: 0 }}
                                type="radio" id="intense" name="activityLevel" value={1.725} />
                            <label htmlFor="intense">{t('activity-levels.intense')}</label>
                        </S.RadioInput>
                    </S.RadioGroup>
                </div>

                <S.CalcButton type="submit" disabled={!isFormValid()}>
                    {t('cta')}
                </S.CalcButton>

            </S.Form>

            <S.ResultBox tmb={tmb}>
                <p>{t('bmr')} <span>{tmb.toFixed()} {t('unit')}</span></p>
                <p>{t('bmr-plus-activities')} <span>{spentCalories.toFixed()} {t('unit')}</span></p>
                <p>{t('bmr-lose-weight')}<span>{Number(spentCalories.toFixed()) - 200} {t('unit')}</span></p>
                <p>{t('bmr-gain-weight')} <span>{(Number(spentCalories.toFixed()) + 200)} {t('unit')}</span></p>
            </S.ResultBox>
        </S.MainContainer>
    )
}