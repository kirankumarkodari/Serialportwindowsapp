using RGiesecke.DllExport;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TestDll_Delphi
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
        }
        


     }
    class MyDllExports
    {
        [DllExport]
        static bool ConnecttoHttps()
        {
            try
            {


                HttpClient httpClient = new HttpClient();

                httpClient.GetStringAsync("https://efftronicsrtls.azurewebsites.net/sendnotification");
                return true;

            }
            catch (Exception exp)
            {
                return false;
            }

        }
    }

    

}
