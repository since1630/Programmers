# -- 코드를 입력하세요
SELECT animal_type, IFNULL(name,'No name'), sex_upon_intake
from ANIMAL_INS
order by ANIMAL_ID