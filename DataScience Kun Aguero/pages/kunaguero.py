import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

st.title("Sergio el 'Kun' Aguero")
st.write("El video: https://www.youtube.com/watch?v=8P29ZQIJRSU&ab_channel=Wouva")

st.write("la info procesada")
clasif = ["penal","cabeza","normal-media distancia","normal-recibe al medio","normal-mano a mano-cruzando","normal-mano a mano-picando","normal-mano a mano-pasando","Otra Clasificación"]
cantidad = [42,23,12,67,5,3,4,92]

# Create the plot
fig, ax = plt.subplots()
ax.plot(clasif, cantidad)
ax.set_xlabel('Clasificación')
ax.set_ylabel('Cantidad')
ax.set_title('Sergio el "Kun" Agüero')

# Display the plot in Streamlit using st.pyplot()
st.pyplot(fig)

st.write("extra link: https://colab.research.google.com/drive/1LBrQqDr_G3iSYdPmtpQ8zB6r_dcESndC#scrollTo=DWXvGlE_BcnZ")
